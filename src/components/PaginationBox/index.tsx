import React from 'react';

import { Box } from '@mui/material';
import { NextPageButton, PrevPageButton } from './styles';

import { PaginationBoxProps } from './types';

const PaginationBox: React.FC<PaginationBoxProps> = ({
  nextPage,
  prevPage,
  nextBtnDisable,
  prevBtnDisable,
  label,
}) => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 80,
      // behavior: 'smooth',
    });
  };

  const onNextPageClick = (): void => {
    nextPage();
    scrollToTop();
  };

  const onPrevPageClick = (): void => {
    prevPage();
    scrollToTop();
  };

  return (
    <Box mt={2}>
      <NextPageButton variant="contained" onClick={onNextPageClick} disabled={nextBtnDisable}>
        Next {label}
      </NextPageButton>
      <PrevPageButton variant="contained" onClick={onPrevPageClick} disabled={prevBtnDisable}>
        Prev {label}
      </PrevPageButton>
    </Box>
  );
};

export default PaginationBox;
