import { useMemo } from 'react';

import { useTable, Column } from 'react-table';

import {
  TableContainer,
  TableHeader,
  HeaderCell,
  TableBody,
  TableCell,
  TableRow,
} from './styles';

interface Students {
  name: string;
  cpf: string;
  email: string;
}

function Table() {
  const data = useMemo(
    () => [
      {
        name: 'André Ribeiro',
        cpf: '79506315035',
        email: 'andrezito@gmail.com',
      },
      {
        name: 'Mateus Vilasboas',
        cpf: '37227280020',
        email: 'aow@gmail.com',
      },
      {
        name: 'Ícaro Assis',
        cpf: '86259109040',
        email: 'icaroaf@gmail.com',
      },
      {
        name: 'Lucas Gabriel',
        cpf: '28011705008',
        email: 'xexa@gmail.com',
      },
      {
        name: 'Matheus Amaral',
        cpf: '45812640068',
        email: 'maral@gmail.com',
      },
    ],
    [],
  );

  const columns: Array<Column<Students>> = useMemo(
    () => [
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
    ],
    [],
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <TableContainer {...getTableProps()}>
      <TableHeader>
        {headerGroups.map(headerGroup => (
          // eslint-disable-next-line react/jsx-key
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              // eslint-disable-next-line react/jsx-key
              <HeaderCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </HeaderCell>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);

          return (
            // eslint-disable-next-line react/jsx-key
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => (
                // eslint-disable-next-line react/jsx-key
                <TableCell {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
}

export default Table;
