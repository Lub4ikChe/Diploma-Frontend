import React from 'react';

import Modal from '../Modal';
import ProfileSettings from './ProfileSettings';

import { ProfileSettingsModalProps } from './types';

const ProfileSettingsModal: React.FC<ProfileSettingsModalProps> = ({ open, closeModal }) => {
  return (
    <Modal open={open} onClose={closeModal}>
      <ProfileSettings closeModal={closeModal} />
    </Modal>
  );
};

export default ProfileSettingsModal;
