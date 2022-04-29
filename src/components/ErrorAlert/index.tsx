import React from 'react';
import { AlertTitle } from '@mui/material';

import { StyledErrorAlert, StyledSpan } from './styles';
import { ErrorAlertProps } from './types';

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  const renderMessageArray = (messages: string[]): JSX.Element[] => {
    return messages.map(msg => <StyledSpan key={msg}>{msg}</StyledSpan>);
  };

  return (
    <StyledErrorAlert severity="error" color="error">
      <AlertTitle>Error</AlertTitle>
      {Array.isArray(message) ? renderMessageArray(message) : <StyledSpan>{message}</StyledSpan>}
    </StyledErrorAlert>
  );
};

export default ErrorAlert;
