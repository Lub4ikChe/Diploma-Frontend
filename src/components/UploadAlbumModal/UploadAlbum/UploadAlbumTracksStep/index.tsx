import React from 'react';

import { Box, Typography } from '@mui/material';
import FileUpload from '../../../FileUpload';

import { UploadAlbumTracksStepProps } from './types';
import { AcceptUploadFiles } from '../../../FileUpload/types';

const UploadAlbumTracksStep: React.FC<UploadAlbumTracksStepProps> = ({
  audioNames,
  onFileInputChange,
  isUploadButtonDisabled,
}) => {
  return (
    <Box display="flex" flexWrap="wrap">
      <Box mr={audioNames?.length ? 2 : 0}>
        {audioNames?.map(name => (
          <Typography key={name} variant="body2">
            {name}
          </Typography>
        ))}
      </Box>
      <FileUpload
        onFileInputChange={onFileInputChange}
        isUploadButtonDisabled={isUploadButtonDisabled}
        label="Choose audios"
        accept={AcceptUploadFiles.AUDIO}
        multiple
      />
    </Box>
  );
};

export default UploadAlbumTracksStep;
