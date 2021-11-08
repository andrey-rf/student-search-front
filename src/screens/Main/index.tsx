import { useMutation } from '@apollo/client';

import { COLUMNS } from '@constants/table';

import { FlexBox } from '@components/Box';
import { PrimaryButton } from '@components/Button';
import Modal from '@components/Modal';
import StudentForm from '@components/StudentForm';
import { FormData } from '@components/StudentForm/types';
import Table from '@components/Table';

import { ADD_STUDENT } from '@graphql/students';
import {
  MutationAddStudentArgs,
  useAllStudentsQuery,
  Student,
} from '@graphql/types/generated';

function Main() {
  const { loading, data: queryData, error } = useAllStudentsQuery();

  const [addStudent, { loading: addLoading, error: addError }] = useMutation<
    Student,
    MutationAddStudentArgs
  >(ADD_STUDENT);

  const handleAdd = (data: FormData) => {
    return addStudent({
      variables: {
        name: data.name,
        cpf: data.cpf,
        email: data.email,
      },
    });
  };

  const content = () => {
    if (loading) {
      return <span>Loading...</span>;
    }
    if (error || !queryData) {
      return <span>Ocorreu um erro...</span>;
    }
    return (
      queryData?.listStudents.length > 0 && (
        <Table tableColumns={COLUMNS} tableData={queryData?.listStudents} />
      )
    );
  };

  return (
    <FlexBox direction="column">
      <Modal
        disclosure={
          <PrimaryButton type="button" alignSelf="flex-end">
            Adicionar aluno
          </PrimaryButton>
        }
      >
        <StudentForm onSubmit={handleAdd} loading={addLoading} />
      </Modal>
      {content()}
    </FlexBox>
  );
}

export default Main;
