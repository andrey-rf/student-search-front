import { Column } from 'react-table';

import { Student } from '@graphql/types/generated';

interface TableProps {
  tableColumns: Array<Column<any>>;
  tableData: Array<Student>;
}

export type { TableProps };
