import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { Column } from 'react-table';

import { COLUMNS } from '@constants/table';

import { FlexBox } from '@components/Box';
import {
  DangerButton,
  PrimaryButton,
  SecondaryButton,
} from '@components/Button';
import Modal from '@components/Modal';
import StudentForm from '@components/StudentForm';
import { FormData } from '@components/StudentForm/types';
import Table from '@components/Table';
import { TableColumnValues } from '@components/Table/types';

import { ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from '@graphql/students';
import {
  MutationAddStudentArgs,
  MutationUpdateStudentArgs,
  useAllStudentsQuery,
  Student,
  MutationDeleteStudentArgs,
} from '@graphql/types/generated';

function Main() {
  const [addDialogOpen, setAddDialogOpen] = useState<boolean>(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState<boolean>(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const { loading, data: queryData, error } = useAllStudentsQuery();

  const [addStudent, { loading: addLoading, error: addError }] = useMutation<
    Student,
    MutationAddStudentArgs
  >(ADD_STUDENT);

  const [updateStudent, { loading: updateLoading, error: updateError }] =
    useMutation<Student, MutationUpdateStudentArgs>(UPDATE_STUDENT);

  const [deleteStudent, { loading: deleteLoading, error: deleteError }] =
    useMutation<Student, MutationDeleteStudentArgs>(DELETE_STUDENT);

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

  const COLUMNS_WITH_ACTIONS: Array<Column<any>> = [
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
