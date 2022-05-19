import React from 'react';

import { Grid, Typography } from '@mui/material';
import { FormTextField } from '../../../AuthFormCard';

import { AddTrackInfoStepProps } from './types';

const AddTrackInfoStep: React.FC<AddTrackInfoStepProps> = ({
  name,
  onNameChange,
  text,
  onTextChange,
}) => {
  return (
    <Grid container direction="column">
      <Typography variant="h4">Fill track information</Typography>
      <FormTextField
        fullWidth
        label="Tack name"
        value={name}
        variant="filled"
        margin="normal"
        required
        InputProps={{
          disableUnderline: true,
        }}
        onChange={onNameChange}
      />
      <FormTextField
        fullWidth
        label="Tack text"
        value={text}
        variant="filled"
        margin="normal"
        multiline
        InputProps={{
          disableUnderline: true,
        }}
        onChange={onTextChange}
      />
    </Grid>
  );
};

export default AddTrackInfoStep;
