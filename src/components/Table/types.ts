import { Column } from 'react-table';

import { Student } from '@graphql/types/generated';

interface TableActionHeaders {
  edit: JSX.Element;
  delete: JSX.Element;
}

type TableHeaders = Student & TableActionHeaders;

interface TableProps {
  tableColumns: Array<Column<TableHeaders>>;
  tableData: Array<Student>;
  loading: boolean;
}

export type { TableProps, TableHeaders };
