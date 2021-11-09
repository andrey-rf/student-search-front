import { useMemo } from 'react';

import { useTable } from 'react-table';

import {
  TableContainer,
  TableHeader,
  HeaderCell,
  TableBody,
  TableCell,
  TableRow,
} from './styles';
import type { TableHeaders, TableProps } from './types';

function Table({ tableColumns, tableData }: TableProps) {
  const columns = useMemo(() => tableColumns, [tableColumns]);

  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable<TableHeaders>({ columns, data });

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
