import React from 'react';

import AlbumListItem from './AlbumListItem';
import { StyledBoxGridWrapper } from './styles';

import { AlbumListProps } from './types';

const cardWidth = 226;

const AlbumList: React.FC<AlbumListProps> = ({ albums }) => {
  const boxRef = React.useRef<HTMLDivElement>();
  const [sectionCount, setSectionCount] = React.useState<number>(3);

  const calculateSectionCount = (): void => {
    const width = boxRef.current?.offsetWidth;
    if (width) setSectionCount(Math.floor(width / cardWidth));
  };

  React.useEffect(() => {
    calculateSectionCount();

    window.addEventListener('resize', calculateSectionCount);
    return () => {
      window.removeEventListener('resize', calculateSectionCount);
    };
  }, [boxRef]);

  return (
    <StyledBoxGridWrapper ref={boxRef} sx={{ gridTemplateColumns: `repeat(${sectionCount}, 1fr)` }}>
      {albums.map(album => {
        return <AlbumListItem key={album.id} album={album} />;
      })}
    </StyledBoxGridWrapper>
  );
};

export default AlbumList;
