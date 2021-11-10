import styled from 'styled-components';
import Image from 'next/image';
import { FlexBox } from '@components/Box';

const HeaderBox = styled(FlexBox)`
  font-family: Mohave, sans-serif;
  max-width: 1100px;
  position: relative;
  width: 100%;
`;

const StyledHeader = styled.header`
  width: 100%;
  padding: 32px 0;
  background: ${({ theme }) => theme.colors.green.primary};

  h1 {
    margin: 0;
    font-size: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderBox justify="center" align="center">
        <ImageContainer>
          <Image src="/logo-nao-complica.png" height={64} width={188} />
        </ImageContainer>
        <h1>Gerenciamento de Alunos</h1>
      </HeaderBox>
    </StyledHeader>
  );
}

export { Header };
