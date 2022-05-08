import { ReactChild, ReactNode } from 'react';

export interface ModalProps {
  children: ReactChild | ReactNode;
  open: boolean;
  onClose: () => void;
}
