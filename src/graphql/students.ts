import { gql } from '@apollo/client';

const LIST_STUDENTS = gql`
  query allStudents {
    listStudents {
      name
      cpf
      email
    }
  }
`;

const ADD_STUDENT = gql`
  mutation AddStudent($name: String!, $cpf: String!, $email: String!) {
    addStudent(name: $name, cpf: $cpf, email: $email) {
      name
    }
  }
`;

export { LIST_STUDENTS, ADD_STUDENT };
