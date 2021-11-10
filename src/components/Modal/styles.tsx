import { Button } from 'reakit/Button';
import styled from 'styled-components';

const DialogBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
`;

const Dialog = styled.div`
  margin: auto;
  background-color: white;
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
  min-width: 20%;
  min-height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1250px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.4rem;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1rem;
`;

export { DialogBackdrop, Dialog, CloseButton };
