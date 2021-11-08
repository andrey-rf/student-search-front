import { Column } from 'react-table';

import { Student } from '@graphql/types/generated';

interface TableProps {
  tableColumns: Array<Column<Student>>;
  tableData: Array<Student>;
}

export type { TableProps };
