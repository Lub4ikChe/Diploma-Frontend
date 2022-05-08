import React from 'react';

import { Modal as ModalComponent } from '@mui/material';
import { StyledBox } from './styles';

import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  return (
    <ModalComponent open={open} onClose={onClose}>
      <StyledBox>{children}</StyledBox>
    </ModalComponent>
  );
};

export default Modal;
