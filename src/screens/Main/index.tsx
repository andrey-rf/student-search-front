import { COLUMNS } from '@constants/table';

import { FlexBox } from '@components/Box';
import Table from '@components/Table';

import { useAllStudentsQuery } from '@graphql/types/generated';

function Main() {
  const { loading, data, error } = useAllStudentsQuery();

  const content = () => {
    if (loading) {
      return <span>Loading...</span>;
    }
    if (error || !data) {
      return <span>Ocorreu um erro...</span>;
    }
    return (
      data?.listStudents.length > 0 && (
        <Table tableColumns={COLUMNS} tableData={data?.listStudents} />
      )
    );
  };

  return <FlexBox>{content()}</FlexBox>;
}

export default Main;
