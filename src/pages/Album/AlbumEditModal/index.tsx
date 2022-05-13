import React from 'react';

import { Box, Button, Typography, Grid } from '@mui/material';

import Modal from '../../../components/Modal';
import { FormTextField } from '../../../components/AuthFormCard';
import ErrorAlert from '../../../components/ErrorAlert';

import { AlbumEditModalProps } from './types';

import { useActions } from '../../../hooks/use-actions';
import { useTypedSelector } from '../../../hooks/use-typed-selector';

const AlbumEditModal: React.FC<AlbumEditModalProps> = ({ open, onClose, album }) => {
  const [name, setName] = React.useState<string>(album.name);
  const [isSavedClicked, setIsSavedClicked] = React.useState<boolean>(false);

  const { updateAlbum, setAlbumsError } = useActions();
  const { error, loading } = useTypedSelector(state => state.albums);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const onSaveClick = (): void => {
    updateAlbum(album.id, name);
    setIsSavedClicked(true);
  };

  const onCloseHandler = (): void => {
    onClose();
    setAlbumsError(null);
  };

  React.useEffect(() => {
    if (!error && !loading && isSavedClicked) {
      onClose();
    }
  }, [loading]);

  const saveButtonDisabled = !name.length || loading;

  return (
    <Modal open={open} onClose={onCloseHandler}>
      <Box p={2}>
        <Typography variant="h4">Edit album name</Typography>
        {error && <ErrorAlert message={error} />}
        <FormTextField
          fullWidth
          label="Album name"
          value={name}
          variant="filled"
          margin="normal"
          InputProps={{
            disableUnderline: true,
          }}
          onChange={onNameChange}
        />
        <Grid container spacing={1} mt={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={onSaveClick}
              disabled={saveButtonDisabled}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Button fullWidth variant="contained" color="error" onClick={onCloseHandler}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default AlbumEditModal;
