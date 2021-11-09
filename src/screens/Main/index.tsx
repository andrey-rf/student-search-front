import { useCallback, useEffect, useState } from 'react';

import { useLazyQuery, useMutation } from '@apollo/client';
import { Column } from 'react-table';

import { COLUMNS } from '@helpers/constants';

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

import { LIST_STUDENTS } from '@graphql/students';
import { Student, AllStudentsQuery } from '@graphql/types/generated';
import { TableHeaders } from '@components/Table/types';
import { useGraphQL } from '@hooks/useGraphQL';

function Main() {
  const [addDialogOpen, setAddDialogOpen] = useState<boolean>(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState<boolean>(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [studentList, setStudentList] = useState<Array<Student>>([]);

  const { addStudentResult, updateStudentResult, deleteStudentResult } =
    useGraphQL();

  const [getStudents, { loading, error, data: queryData }] =
    useLazyQuery<AllStudentsQuery>(LIST_STUDENTS, {
      onCompleted: data => {
        setStudentList(data.listStudents);
      },
    });
  const searchStudents = useDebounce(getStudents, 500);

  const [addStudent, { loading: addLoading, error: addError }] =
    addStudentResult;

  const [updateStudent, { loading: updateLoading, error: updateError }] =
    updateStudentResult;

  const [deleteStudent, { loading: deleteLoading, error: deleteError }] =
    deleteStudentResult;

  const handleAdd = (data: FormData) =>
    addStudent({
      variables: {
        name: data.name,
        cpf: data.cpf,
        email: data.email,
      },
    }).then(() => {
      if (!addError) {
        setAddDialogOpen(false);
      }
    });

  const handleUpdate = (data: FormData) =>
    updateStudent({
      variables: {
        name: data.name,
        cpf: data.cpf,
        email: data.email,
      },
    }).then(() => {
      if (!updateError) {
        setUpdateDialogOpen(false);
      }
    });

  const handleDelete = (cpf: string) =>
    deleteStudent({
      variables: {
        cpf,
      },
    }).then(() => {
      if (!deleteError) {
        setDeleteDialogOpen(false);
      }
    });

  const handleSearch = (value: string) => {
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

  useEffect(() => {
    if (queryData) {
      setStudentList(queryData.listStudents);
    }
  }, [queryData]);

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
      {loading && <span>Loading...</span>}
      {!loading && error && <span>Ocorreu um erro...</span>}
      {!loading &&
        !error &&
        (studentList.length > 0 ? (
          <Table tableColumns={COLUMNS_WITH_ACTIONS} tableData={studentList} />
        ) : (
          <span>Nenhum estudante adicionado</span>
        ))}
      {addDialogOpen && (
        <Modal setModalOpen={setAddDialogOpen}>
          <StudentForm onSubmit={handleAdd} loading={addLoading} />
        </Modal>
      )}
      {updateDialogOpen && editingStudent && (
        <Modal setModalOpen={setUpdateDialogOpen}>
          <StudentForm
            onSubmit={handleUpdate}
            loading={updateLoading}
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
