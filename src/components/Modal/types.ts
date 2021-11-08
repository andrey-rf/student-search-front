import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface ModalProps {
  disclosure: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  children?: ReactNode;
}

export type { ModalProps };
