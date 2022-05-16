import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Typography, FormControlLabel, Checkbox, Button } from '@mui/material';

import Modal from '../../../components/Modal';

import { DeleteAlbumModalProps } from './types';

import { useActions } from '../../../hooks/use-actions';

import { routerLinks } from '../../../router/router-links.enum';

const DeleteAlbumModal: React.FC<DeleteAlbumModalProps> = ({ open, onClose, album }) => {
  const [deleteWithTracks, setDeleteWithTracks] = React.useState<boolean>(false);

  const { deleteAlbum } = useActions();
  const navigate = useNavigate();

  const onCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDeleteWithTracks(event.target.checked);
  };

  const onDeleteClick = (): void => {
    deleteAlbum(album.id, deleteWithTracks);
    onClose();
    navigate(routerLinks.MY_ALBUMS);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box p={2}>
        <Typography variant="h4">Delete album</Typography>
        <FormControlLabel
          label="Include deletion of tracks"
          control={
            <Checkbox color="error" checked={deleteWithTracks} onChange={onCheckBoxChange} />
          }
        />
        <Button fullWidth variant="contained" color="error" onClick={onDeleteClick}>
          Delete
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteAlbumModal;
