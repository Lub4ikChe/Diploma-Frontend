import React from 'react';

import Modal from '../Modal';
import AccountSettings from './AccountSettings';

import { AccountSettingsModalProps } from './types';

const AccountSettingsModal: React.FC<AccountSettingsModalProps> = ({ open, closeModal }) => {
  return (
    <Modal open={open} onClose={closeModal}>
      <AccountSettings closeModal={closeModal} />
    </Modal>
  );
};

export default AccountSettingsModal;
