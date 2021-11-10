import { render, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { LIST_STUDENTS } from '../../../graphql/students';
import Main from '../';

const MOCKS = [
  {
    request: {
      query: LIST_STUDENTS,
      variables: { text: '' },
    },
    result: {
      data: {
        listStudents: {
          name: 'Teste',
          cpf: '11111111111',
          email: 'teste@teste.com',
        },
      },
    },
  },
];

const renderComponents = (mocks = MOCKS) => {
  return render(
    <MockedProvider addTypename={false} mocks={mocks}>
      <Main />
    </MockedProvider>,
  );
};

describe('Test Students', () => {
  it('should render query results', async () => {
    const { getByTestId } = renderComponents();

    await waitFor(() => {
      const tableRow = getByTestId('table-user-tr-1');
      const children = tableRow.querySelectorAll('td');

      expect(children[0].innerHTML.toEqual('Teste'));
      expect(children[0].innerHTML.toEqual('111.111.111-11'));
      expect(children[0].innerHTML.toEqual('teste@teste.com'));
    });
  });
});
