import React from 'react';

import { Box } from '@mui/material';
import FileUpload from '../../../FileUpload';

import { UploadAlbumImageStepProps } from './types';
import { AcceptUploadFiles } from '../../../FileUpload/types';

const UploadAlbumImageStep: React.FC<UploadAlbumImageStepProps> = ({
  imageSrc,
  onFileInputChange,
  isUploadButtonDisabled,
}) => {
  return (
    <Box display="flex" flexWrap="wrap">
      <Box
        mr={2}
        component="img"
        height={200}
        width={200}
        src={imageSrc || undefined}
        crossOrigin="anonymous"
      />
      <FileUpload
        onFileInputChange={onFileInputChange}
        isUploadButtonDisabled={isUploadButtonDisabled}
        label="Choose image"
        accept={AcceptUploadFiles.IMAGE}
      />
    </Box>
  );
};

export default UploadAlbumImageStep;
