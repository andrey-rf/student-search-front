import { useQuery } from '@apollo/client';

import { FlexBox } from '@components/Box';
import Table from '@components/Table';

import { LIST_STUDENTS } from '@graphql/students';

function Main() {
  const { loading, data, error } = useQuery(LIST_STUDENTS);

  const content = () => {
    if (loading) {
      return <span>Loading...</span>;
    }
    if (error) {
      return <span>Ocorreu um erro...</span>;
    }
    console.log(data);
    return <Table />;
  };

  return <FlexBox>{content()}</FlexBox>;
}

export default Main;
