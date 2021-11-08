import { Column } from 'react-table';

import { Student } from '@graphql/types/generated';

const COLUMNS: Array<Column<Student>> = [
  {
    Header: 'Nome',
    accessor: 'name',
  },
  {
    Header: 'CPF',
    accessor: 'cpf',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
];

export { COLUMNS };
