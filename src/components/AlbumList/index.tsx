import React from 'react';

import GridContainer from '../GridContainer';
import AlbumListItem from './AlbumListItem';

import { AlbumListProps } from './types';

const AlbumList: React.FC<AlbumListProps> = ({ albums }) => {
  return (
    <GridContainer>
      {albums.map(album => {
        return <AlbumListItem key={album.id} album={album} />;
      })}
    </GridContainer>
  );
};

export default AlbumList;
