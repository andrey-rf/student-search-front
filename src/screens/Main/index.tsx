import { useEffect, useState } from 'react';

import { useLazyQuery } from '@apollo/client';
import { Column } from 'react-table';

import { COLUMNS } from '@helpers/constants';

import { FlexBox } from '@components/Box';
import {
  DangerButton,
  OutlinedDangerButton,
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
import Loader from 'react-loader-spinner';
import { onlyNumbers } from '@helpers/inputMask';
import Image from 'next/image';

import alert from '@assets/alert.svg';

type Modal = 'add' | 'update' | 'delete' | '';

function Main() {
  const [dialogOpen, setDialogOpen] = useState<Modal>('');
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [studentList, setStudentList] = useState<Array<Student>>([]);

  const closeModal = () => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
    setDialogOpen('');
  };

  const openModal = (modal: Modal) => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';
    }
    setDialogOpen(modal);
  };

  const { addStudentResult, updateStudentResult, deleteStudentResult } =
    useGraphQL(closeModal);

  const [getStudents, { loading, error, data: queryData }] =
    useLazyQuery<AllStudentsQuery>(LIST_STUDENTS, {
      onCompleted: data => {
        setStudentList(data.listStudents);
      },
    });
  const searchStudents = useDebounce(getStudents, 500);

  const [addStudent, { loading: addLoading }] = addStudentResult;

  const [updateStudent, { loading: updateLoading }] = updateStudentResult;

  const [deleteStudent, { loading: deleteLoading }] = deleteStudentResult;

  const handleAdd = (data: FormData) =>
    addStudent({
      variables: {
        name: data.name,
        cpf: onlyNumbers(data.cpf),
        email: data.email,
      },
    });

  const handleUpdate = (data: FormData) =>
    updateStudent({
      variables: {
        name: data.name,
        cpf: onlyNumbers(data.cpf),
        email: data.email,
      },
    });

  const handleDelete = (cpf: string) =>
    deleteStudent({
      variables: {
        cpf,
      },
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
          aria-label={`Editar ${original.name}`}
          onClick={() => {
            openModal('update');
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
        <OutlinedDangerButton
          aria-label={`Excluir ${original.name}`}
          type="button"
          onClick={() => {
            openModal('delete');
            setEditingStudent(original);
          }}
        >
          Excluir aluno
        </OutlinedDangerButton>
      ),
    },
  ];

  return (
    <>
      <FlexBox justify="space-between" align="center">
        <Search
          id="search"
          label="Pesquisa"
          placeholder="Digite um nome, email ou CPF..."
          value={searchValue}
          handleChange={handleSearch}
        />
        <PrimaryButton
          type="button"
          aria-label="Adicionar aluno"
          onClick={() => openModal('add')}
          fontSize={1}
        >
          + Adicionar aluno
        </PrimaryButton>
      </FlexBox>
      {error && <h3>Ocorreu um erro :(</h3>}
      {!error && studentList.length > 0 && (
        <Table
          tableColumns={COLUMNS_WITH_ACTIONS}
          tableData={studentList}
          loading={loading}
        />
      )}
      {!error && !(studentList.length > 0) && (
        <FlexBox justify="center" marginTop={2}>
          <h3>Nenhum estudante encontrado :(</h3>
        </FlexBox>
      )}
      {dialogOpen === 'add' && (
        <Modal closeModal={closeModal}>
          <StudentForm onSubmit={handleAdd} loading={addLoading} />
        </Modal>
      )}
      {dialogOpen === 'update' && editingStudent && (
        <Modal closeModal={closeModal}>
          <StudentForm
            onSubmit={handleUpdate}
            loading={updateLoading}
            value={editingStudent}
          />
        </Modal>
      )}
      {dialogOpen === 'delete' && editingStudent && (
        <Modal closeModal={closeModal}>
          <FlexBox direction="column" gap={2} align="center">
            {!deleteLoading ? (
              <>
                <h3>Tem certeza que deseja excluir {editingStudent.name}?</h3>
                <Image src={alert} width={96} height={96} />
                <DangerButton
                  alignSelf="center"
                  aria-label={`Confirmar exclusão de ${editingStudent.name}`}
                  onClick={() => handleDelete(editingStudent.cpf)}
                >
                  Confirmar
                </DangerButton>
              </>
            ) : (
              <Loader type="TailSpin" color="#CCC" height={40} width={40} />
            )}
          </FlexBox>
        </Modal>
      )}
    </>
  );
}

export default Main;
