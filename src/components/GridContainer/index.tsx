import React from 'react';

import { StyledBoxGridWrapper } from './styles';

import { GridContainerProps } from './types';

const cardWidth = 226;

const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  const boxRef = React.useRef<HTMLDivElement>();
  const [sectionCount, setSectionCount] = React.useState<number>(3);

  const calculateSectionCount = React.useCallback((): void => {
    const width = boxRef.current?.offsetWidth;
    if (width) setSectionCount(Math.floor(width / cardWidth));
  }, []);

  React.useEffect(() => {
    calculateSectionCount();

    window.addEventListener('resize', calculateSectionCount);
    return () => {
      window.removeEventListener('resize', calculateSectionCount);
    };
  }, [boxRef, calculateSectionCount]);

  return (
    <StyledBoxGridWrapper ref={boxRef} sx={{ gridTemplateColumns: `repeat(${sectionCount}, 1fr)` }}>
      {children}
    </StyledBoxGridWrapper>
  );
};

export default GridContainer;
