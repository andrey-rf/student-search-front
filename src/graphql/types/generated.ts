import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addStudent: Student;
  deleteStudent: Scalars['String'];
  updateStudent: Student;
};


export type MutationAddStudentArgs = {
  cpf: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
};


export type MutationDeleteStudentArgs = {
  cpf: Scalars['String'];
};


export type MutationUpdateStudentArgs = {
  cpf: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getStudent?: Maybe<Student>;
  listStudents: Array<Student>;
};


export type QueryGetStudentArgs = {
  cpf: Scalars['String'];
};


export type QueryListStudentsArgs = {
  text?: Maybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  cpf: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type AllStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllStudentsQuery = { __typename?: 'Query', listStudents: Array<{ __typename?: 'Student', name: string, cpf: string, email: string }> };


export const AllStudentsDocument = gql`
    query allStudents {
  listStudents {
    name
    cpf
    email
  }
}
    `;

/**
 * __useAllStudentsQuery__
 *
 * To run a query within a React component, call `useAllStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllStudentsQuery(baseOptions?: Apollo.QueryHookOptions<AllStudentsQuery, AllStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllStudentsQuery, AllStudentsQueryVariables>(AllStudentsDocument, options);
      }
export function useAllStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllStudentsQuery, AllStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllStudentsQuery, AllStudentsQueryVariables>(AllStudentsDocument, options);
        }
export type AllStudentsQueryHookResult = ReturnType<typeof useAllStudentsQuery>;
export type AllStudentsLazyQueryHookResult = ReturnType<typeof useAllStudentsLazyQuery>;
export type AllStudentsQueryResult = Apollo.QueryResult<AllStudentsQuery, AllStudentsQueryVariables>;