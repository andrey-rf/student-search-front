import { TableHeaders } from '@components/Table/types';
import { Column } from 'react-table';

const COLUMNS: Array<Column<TableHeaders>> = [
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
