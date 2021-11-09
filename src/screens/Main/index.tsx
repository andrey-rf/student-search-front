import { useCallback, useEffect, useState } from 'react';

import { useLazyQuery, useMutation } from '@apollo/client';
import { Column } from 'react-table';

import { COLUMNS } from '@constants/table';

import { FlexBox } from '@components/Box';
import {
  DangerButton,
  PrimaryButton,
  SecondaryButton,
} from '@components/Button';
import Modal from '@components/Modal';
import Search from '@components/SearchBar';
import StudentForm from '@components/StudentForm';
import { FormData } from '@components/StudentForm/types';
import Table from '@components/Table';

import { useDebounce } from '@hooks/useDebounce';

import {
  ADD_STUDENT,
  DELETE_STUDENT,
  LIST_STUDENTS,
  UPDATE_STUDENT,
} from '@graphql/students';
import {
  MutationAddStudentArgs,
  MutationUpdateStudentArgs,
  Student,
  MutationDeleteStudentArgs,
  AllStudentsQuery,
} from '@graphql/types/generated';
import { TableHeaders } from '@components/Table/types';

function Main() {
  const [addDialogOpen, setAddDialogOpen] = useState<boolean>(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState<boolean>(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  const [getStudents, { loading, data: queryData, error }] =
    useLazyQuery(LIST_STUDENTS);
  const searchStudents = useDebounce(getStudents, 500);

  const [addStudent, { loading: addLoading, error: addError }] = useMutation<
    Student,
    MutationAddStudentArgs
  >(ADD_STUDENT, {
    update: (cache, mutationResult) => {
      const newStudent = mutationResult.data;
      const data = cache.readQuery<AllStudentsQuery>({
        query: LIST_STUDENTS,
      });
      cache.writeQuery({
        query: LIST_STUDENTS,
        data: { listStudents: [...(data?.listStudents ?? []), newStudent] },
      });
    },
  });

  const [updateStudent, { loading: updateLoading, error: updateError }] =
    useMutation<Student, MutationUpdateStudentArgs>(UPDATE_STUDENT, {
      refetchQueries: [LIST_STUDENTS, 'listStudents'],
    });

  const [deleteStudent, { loading: deleteLoading, error: deleteError }] =
    useMutation<Student, MutationDeleteStudentArgs>(DELETE_STUDENT, {
      refetchQueries: [LIST_STUDENTS, 'listStudents'],
    });

  const handleAdd = (data: FormData) => {
    addStudent({
      variables: {
        name: data.name,
        cpf: data.cpf,
        email: data.email,
      },
    });
    setAddDialogOpen(false);
  };

  const handleUpdate = (data: FormData) => {
    updateStudent({
      variables: {
        name: data.name,
        cpf: data.cpf,
        email: data.email,
      },
    });
    setUpdateDialogOpen(false);
  };

  const handleDelete = (cpf: string) => {
    deleteStudent({
      variables: {
        cpf,
      },
    });
    setDeleteDialogOpen(false);
  };

  const handleSearch = (value: string) => {
    console.log('aaa');
    setSearchValue(value);
    searchStudents({
      variables: {
        text: value,
      },
    });
  };

  useEffect(() => {
    getStudents();
  }, []);

  const COLUMNS_WITH_ACTIONS: Array<Column<TableHeaders>> = [
    ...COLUMNS,
    {
      id: 'edit',
      accessor: 'edit',
      Cell: ({ row: { original } }) => (
        <SecondaryButton
          type="button"
          alignSelf="flex-end"
          onClick={() => {
            setUpdateDialogOpen(true);
            setEditingStudent(original);
          }}
        >
          Editar aluno
        </SecondaryButton>
      ),
    },
    {
      id: 'delete',
      accessor: 'delete',
      Cell: ({ row: { original } }) => (
        <DangerButton
          type="button"
          alignSelf="flex-end"
          onClick={() => {
            setDeleteDialogOpen(true);
            setEditingStudent(original);
          }}
        >
          Excluir aluno
        </DangerButton>
      ),
    },
  ];

  const content = () => {
    if (loading) {
      return <span>Loading...</span>;
    }
    if (error || !queryData) {
      return <span>Ocorreu um erro...</span>;
    }
    return (
      queryData?.listStudents.length > 0 && (
        <Table
          tableColumns={COLUMNS_WITH_ACTIONS}
          tableData={queryData?.listStudents}
        />
      )
    );
  };

  return (
    <FlexBox direction="column">
      <Search
        id="search"
        label="Busca por nome, email ou CPF"
        placeholder="Digite um nome, email ou CPF..."
        value={searchValue}
        handleChange={handleSearch}
      />
      <PrimaryButton
        type="button"
        alignSelf="flex-end"
        onClick={() => setAddDialogOpen(true)}
      >
        Adicionar aluno
      </PrimaryButton>
      {content()}
      {addDialogOpen && (
        <Modal setModalOpen={setAddDialogOpen}>
          <StudentForm onSubmit={handleAdd} loading={addLoading} />
        </Modal>
      )}
      {updateDialogOpen && editingStudent && (
        <Modal setModalOpen={setUpdateDialogOpen}>
          <StudentForm
            onSubmit={handleUpdate}
            loading={addLoading}
            value={editingStudent}
          />
        </Modal>
      )}
      {deleteDialogOpen && editingStudent && (
        <Modal setModalOpen={setDeleteDialogOpen}>
          <FlexBox direction="column" gap={2}>
            <h3>Tem certeza que deseja excluir {editingStudent.name}?</h3>
            <DangerButton
              alignSelf="center"
              onClick={() => handleDelete(editingStudent.cpf)}
            >
              Confirmar
            </DangerButton>
          </FlexBox>
        </Modal>
      )}
    </FlexBox>
  );
}

export default Main;
