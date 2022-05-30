import React from 'react';

import { Grid, Typography } from '@mui/material';
import { FormTextField } from '../../../AuthFormCard';

import { AddAlbumInfoStepProps } from './types';

const AddAlbumInfoStep: React.FC<AddAlbumInfoStepProps> = ({ name, onNameChange }) => {
  return (
    <Grid container direction="column">
      <Typography variant="h4">Fill album information</Typography>
      <FormTextField
        fullWidth
        label="Album name"
        value={name}
        variant="filled"
        margin="normal"
        required
        InputProps={{
          disableUnderline: true,
        }}
        onChange={onNameChange}
      />
    </Grid>
  );
};

export default AddAlbumInfoStep;
