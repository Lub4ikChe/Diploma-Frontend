import React from 'react';

import Modal from '../Modal';
import UploadAlbum from './UploadAlbum';

import { UploadAlbumModalProps } from './types';

const UploadAlbumModal: React.FC<UploadAlbumModalProps> = ({ open, closeModal }) => {
  return (
    <Modal open={open} onClose={closeModal}>
      <UploadAlbum closeModal={closeModal} />
    </Modal>
  );
};

export default UploadAlbumModal;
