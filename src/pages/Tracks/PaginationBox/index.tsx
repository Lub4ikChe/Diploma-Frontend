import React from 'react';

import { Box } from '@mui/material';
import { NextPageButton, PrevPageButton } from './styles';

import { PaginationBoxProps } from './types';

const PaginationBox: React.FC<PaginationBoxProps> = ({
  nextPage,
  prevPage,
  nextBtnDisable,
  prevBtnDisable,
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
        Next tracks
      </NextPageButton>
      <PrevPageButton variant="contained" onClick={onPrevPageClick} disabled={prevBtnDisable}>
        Prev tracks
      </PrevPageButton>
    </Box>
  );
};

export default PaginationBox;
