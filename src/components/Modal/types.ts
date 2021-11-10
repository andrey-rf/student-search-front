import { ReactNode } from 'react';

interface ModalProps {
  closeModal: () => void;
  children?: ReactNode;
}

export type { ModalProps };
