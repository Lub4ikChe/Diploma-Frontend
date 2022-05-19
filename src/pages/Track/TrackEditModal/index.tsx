import React from 'react';
import { useDispatch } from 'react-redux';

import { Box, Button, Typography, Grid } from '@mui/material';

import Modal from '../../../components/Modal';
import { FormTextField } from '../../../components/AuthFormCard';
import ErrorAlert from '../../../components/ErrorAlert';

import { TrackEditModalProps } from './types';

import { useActions } from '../../../hooks/use-actions';
import { useTypedSelector } from '../../../hooks/use-typed-selector';

import { updateTrack } from '../../../store/action-creators/tracks';

const TrackEditModal: React.FC<TrackEditModalProps> = ({ open, onClose, track }) => {
  const [name, setName] = React.useState<string>(track.name);
  const [text, setText] = React.useState<string>(track.text);
  const dispatch = useDispatch();

  const { setTracksError } = useActions();
  const { error, loading } = useTypedSelector(state => state.tracks);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const onSaveClick = async (): Promise<void> => {
    const result = await updateTrack(track.id, name, text)(dispatch);
    if (result) {
      onClose();
    }
  };

  const onCloseHandler = (): void => {
    onClose();
    setTracksError(null);
  };

  const saveButtonDisabled = !name.length || loading;

  return (
    <Modal open={open} onClose={onCloseHandler}>
      <Box p={2}>
        <Typography variant="h4">Edit track name and text</Typography>
        {error && <ErrorAlert message={error} />}
        <FormTextField
          fullWidth
          label="Track name"
          value={name}
          variant="filled"
          margin="normal"
          InputProps={{
            disableUnderline: true,
          }}
          onChange={onNameChange}
        />
        <FormTextField
          fullWidth
          label="Track text"
          value={text}
          variant="filled"
          margin="normal"
          InputProps={{
            disableUnderline: true,
          }}
          onChange={onTextChange}
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

export default TrackEditModal;
