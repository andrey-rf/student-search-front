import { gql } from '@apollo/client';

const LIST_STUDENTS = gql`
  query allStudents($text: String) {
    listStudents(text: $text) {
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

const UPDATE_STUDENT = gql`
  mutation UpdateStudent($name: String!, $cpf: String!, $email: String!) {
    updateStudent(cpf: $cpf, name: $name, email: $email) {
      name
      email
      cpf
    }
  }
`;

const DELETE_STUDENT = gql`
  mutation DeleteStudent($cpf: String!) {
    deleteStudent(cpf: $cpf)
  }
`;

export { LIST_STUDENTS, ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT };
