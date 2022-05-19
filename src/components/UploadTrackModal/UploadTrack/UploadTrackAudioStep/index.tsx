import React from 'react';

import { Box, Typography } from '@mui/material';
import FileUpload from '../../../FileUpload';

import { UploadTrackAudioStepProps } from './types';
import { AcceptUploadFiles } from '../../../FileUpload/types';

const UploadTrackAudioStep: React.FC<UploadTrackAudioStepProps> = ({
  audioName,
  onFileInputChange,
  isUploadButtonDisabled,
}) => {
  return (
    <Box display="flex" flexWrap="wrap">
      <Typography mr={audioName ? 2 : 0}>{audioName}</Typography>
      <FileUpload
        onFileInputChange={onFileInputChange}
        isUploadButtonDisabled={isUploadButtonDisabled}
        label="Choose audio"
        accept={AcceptUploadFiles.AUDIO}
      />
    </Box>
  );
};

export default UploadTrackAudioStep;
