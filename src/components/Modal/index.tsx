import { cloneElement } from 'react';

import { useDialogState, DialogDisclosure } from 'reakit/Dialog';

import { Dialog, DialogBackdrop, CloseButton } from './styles';
import type { ModalProps } from './types';

function Modal({ disclosure, children }: ModalProps) {
  const dialog = useDialogState();

  return (
    <>
      <DialogDisclosure {...dialog} ref={disclosure.ref}>
        {disclosureProps => cloneElement(disclosure, disclosureProps)}
      </DialogDisclosure>
      <DialogBackdrop {...dialog}>
        <Dialog
          {...dialog}
          as="div"
          tabIndex={0}
          aria-label="Formulário de adição de estudante"
        >
          <CloseButton onClick={dialog.hide}>X</CloseButton>
          {children}
        </Dialog>
      </DialogBackdrop>
    </>
  );
}

export default Modal;
