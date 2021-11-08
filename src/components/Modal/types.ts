import { Dispatch, ReactNode } from 'react';

interface ModalProps {
  setModalOpen: Dispatch<boolean>;
  children?: ReactNode;
}

export type { ModalProps };
