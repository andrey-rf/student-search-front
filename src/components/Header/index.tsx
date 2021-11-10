import Image from 'next/image';
import styled from 'styled-components';

import { FlexBox } from '@components/Box';

const HeaderBox = styled(FlexBox)`
  font-family: Mohave, sans-serif;
  max-width: 1440px;
  position: relative;
  width: 100%;

  @media (max-width: 1250px) {
    max-width: 1000px;
  }

  @media (max-width: 1000px) {
    max-width: 800px;
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  padding: 32px 0;
  background: ${({ theme }) => theme.colors.green.primary};

  h1 {
    margin: 0;
    font-size: 2rem;

    @media (max-width: 1250px) {
      font-size: 2.5rem;
    }
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;
const ImageContainerSmall = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;

  @media (max-width: 1000px) {
    display: inline-block;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderBox justify="center" align="center">
        <ImageContainer>
          <Image
            src="/logo-nao-complica.png"
            alt="Logo do não complica, escrito por extenso"
            height={64}
            width={188}
          />
        </ImageContainer>
        <ImageContainerSmall>
          <Image
            src="/logo-nao-complica-small.png"
            alt="Logo do não complica, abreviado com a letra n"
            height={64}
            width={55}
          />
        </ImageContainerSmall>
        <h1>Gerenciamento de Alunos</h1>
      </HeaderBox>
    </StyledHeader>
  );
}

export { Header };
