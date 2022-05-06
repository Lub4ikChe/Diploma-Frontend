import React from 'react';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { StyledBox } from './styles';

import { NoPageContentHeaderProps } from './types';

const NoPageContent: React.FC<NoPageContentHeaderProps> = ({ label }) => {
  return (
    <StyledBox
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        fontSize: 20,
      }}
    >
      There are not any {label}
      <SentimentVeryDissatisfiedIcon color="primary" style={{ marginLeft: 10 }} />
    </StyledBox>
  );
};

export default NoPageContent;
