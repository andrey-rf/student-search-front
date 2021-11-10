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
import Skeleton from 'react-loading-skeleton';
import { FlexBox } from '@components/Box';

function Table({ tableColumns, tableData, loading }: TableProps) {
  const columns = useMemo(
    () =>
      !loading && tableData.length > 0
        ? tableColumns
        : tableColumns.map(column => ({ ...column, Cell: <Skeleton /> })),
    [tableColumns],
  );

  const data = useMemo(
    () => (!loading && tableData.length > 0 ? tableData : Array(5).fill({})),
    [tableData],
  );

  const tableInstance = useTable<TableHeaders>({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <TableContainer {...getTableProps()} data-testid="students-table">
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
        {rows.map((row, index) => {
          prepareRow(row);

          return (
            // eslint-disable-next-line react/jsx-key
            <TableRow {...row.getRowProps()} data-testid={`table-row-${index}`}>
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
