import { useMutation } from '@apollo/client';
import {
  ADD_STUDENT,
  DELETE_STUDENT,
  LIST_STUDENTS,
  UPDATE_STUDENT,
} from '@graphql/students';
import {
  AllStudentsQuery,
  MutationAddStudentArgs,
  MutationDeleteStudentArgs,
  MutationUpdateStudentArgs,
  Student,
} from '@graphql/types/generated';
import { toast } from 'react-toastify';

function useGraphQL() {
  const addStudentResult = useMutation<Student, MutationAddStudentArgs>(
    ADD_STUDENT,
    {
      onError: error => {
        toast.error(error.message);
      },
      onCompleted: () => {
        toast.success('Estudante adicionado com sucesso');
      },
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
    },
  );

  const updateStudentResult = useMutation<Student, MutationUpdateStudentArgs>(
    UPDATE_STUDENT,
    {
      onError: error => {
        toast.error(error.message);
      },
      onCompleted: () => {
        toast.success('Estudante editado com sucesso');
      },
      refetchQueries: [LIST_STUDENTS, 'listStudents'],
    },
  );

  const deleteStudentResult = useMutation<Student, MutationDeleteStudentArgs>(
    DELETE_STUDENT,
    {
      onError: error => {
        toast.error(error.message);
      },
      onCompleted: () => {
        toast.success('Estudante excluído com sucesso');
      },
      refetchQueries: [LIST_STUDENTS, 'listStudents'],
    },
  );

  return { addStudentResult, updateStudentResult, deleteStudentResult };
}

export { useGraphQL };
