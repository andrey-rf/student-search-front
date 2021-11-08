import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  padding: 32px 0;
  background: ${({ theme }) => theme.colors.green.primary};
  margin-bottom: 3rem;

  h1 {
    margin: 0;
    font-size: 2rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Gerenciamento de Alunos</h1>
    </StyledHeader>
  );
}

export { Header };
