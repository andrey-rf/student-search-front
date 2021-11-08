import { Button } from 'reakit/Button';
import {
  Dialog as RawDialog,
  DialogBackdrop as RawDialogBackdrop,
} from 'reakit/Dialog';
import styled from 'styled-components';

const DialogBackdrop = styled(RawDialogBackdrop)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
`;

const Dialog = styled(RawDialog)`
  margin: auto;
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  position: relative;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`;

export { DialogBackdrop, Dialog, CloseButton };
