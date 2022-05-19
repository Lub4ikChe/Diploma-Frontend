import { AlertColor } from '@mui/material';

export interface SnackBarProps {
  open: boolean;
  onClose: () => void;
  severity: AlertColor;
  text: string;
}
