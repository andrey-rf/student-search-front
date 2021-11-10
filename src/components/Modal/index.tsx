import { Dialog, DialogBackdrop, CloseButton } from './styles';
import type { ModalProps } from './types';

function Modal({ children, closeModal }: ModalProps) {
  return (
    <>
      <DialogBackdrop>
        <Dialog
          tabIndex={0}
          aria-label="Pop-up para controle de dados de estudantes"
        >
          <CloseButton onClick={closeModal}>X</CloseButton>
          {children}
        </Dialog>
      </DialogBackdrop>
    </>
  );
}

export default Modal;
