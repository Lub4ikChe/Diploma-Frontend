import React from 'react';

import { Button } from '@mui/material';
import { StyledUploadButton } from './styles';

import { FileUploadProps } from './types';

const FileUpload: React.FC<FileUploadProps> = ({
  onFileInputChange,
  isUploadButtonDisabled,
  label,
  accept,
  multiple = false,
}) => {
  return (
    <label htmlFor="upload-button-file">
      <input
        style={{ display: 'none' }}
        accept={accept}
        id="upload-button-file"
        type="file"
        multiple={multiple}
        onChange={onFileInputChange}
      />
      <Button
        disabled={isUploadButtonDisabled}
        style={StyledUploadButton}
        variant="contained"
        component="span"
      >
        {label}
      </Button>
    </label>
  );
};

export default FileUpload;
