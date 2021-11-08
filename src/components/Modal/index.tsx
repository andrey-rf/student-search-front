import { Dialog, DialogBackdrop, CloseButton } from './styles';
import type { ModalProps } from './types';

function Modal({ children, setModalOpen }: ModalProps) {
  return (
    <>
      <DialogBackdrop>
        <Dialog tabIndex={0} aria-label="Formulário de adição de estudante">
          <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
          {children}
        </Dialog>
      </DialogBackdrop>
    </>
  );
}

export default Modal;
