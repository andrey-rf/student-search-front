import { TableHeaders } from '@components/Table/types';
import { Column } from 'react-table';
import { formatCpf } from './inputMask';

const COLUMNS: Array<Column<TableHeaders>> = [
  {
    Header: 'Nome',
    accessor: 'name',
  },
  {
    Header: 'CPF',
    accessor: 'cpf',
    Cell: ({ value }) => formatCpf(value),
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
];

export { COLUMNS };
