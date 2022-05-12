import React from 'react';
import { AlertTitle } from '@mui/material';

import { StyledErrorAlert, StyledSpan } from './styles';
import { ErrorAlertProps } from './types';

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  const renderMessageArray = (messages: string[]): JSX.Element[] | JSX.Element => {
    if (messages.some(msg => typeof msg !== 'string')) {
      return <StyledSpan>Something went wrong</StyledSpan>;
    }
    return messages.map(msg => {
      return <StyledSpan key={msg}>{msg}</StyledSpan>;
    });
  };

  return (
    <StyledErrorAlert severity="error" color="error">
      <AlertTitle>Error</AlertTitle>
      {Array.isArray(message) ? renderMessageArray(message) : <StyledSpan>{message}</StyledSpan>}
    </StyledErrorAlert>
  );
};

export default ErrorAlert;
