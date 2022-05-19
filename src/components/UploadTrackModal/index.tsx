import React from 'react';

import Modal from '../Modal';
import UploadTrack from './UploadTrack';

import { UploadTrackModalProps } from './types';

const UploadTrackModal: React.FC<UploadTrackModalProps> = ({ open, closeModal }) => {
  return (
    <Modal open={open} onClose={closeModal}>
      <UploadTrack closeModal={closeModal} />
    </Modal>
  );
};

export default UploadTrackModal;
