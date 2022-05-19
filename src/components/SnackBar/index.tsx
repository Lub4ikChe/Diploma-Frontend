import React from 'react';

import { Snackbar as Snack } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { SnackBarProps } from './types';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar: React.FC<SnackBarProps> = ({ open, onClose, severity, text }) => {
  return (
    <Snack
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <Alert severity={severity}>{text}</Alert>
    </Snack>
  );
};

export default SnackBar;
