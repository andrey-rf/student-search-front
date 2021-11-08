import { gql } from '@apollo/client';

export const LIST_STUDENTS = gql`
  query allStudents {
    listStudents {
      name
      cpf
      email
    }
  }
`;
