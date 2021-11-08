import { Column } from 'react-table';

const COLUMNS: Array<Column<any>> = [
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
