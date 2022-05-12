import React from 'react';

import { Grid } from '@mui/material';

import ContentPageHeader from '../../components/ContentPageHeader';
import NoPageContent from '../../components/NoPageContent';
import AlbumList from '../../components/AlbumList';

import { Album } from '../../models/album';

const albums: Album[] = [];

const Albums: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  return (
    <Grid container direction="column">
      <ContentPageHeader label="albums" search={search} onSearchChange={onSearchChange} />
      {albums.length ? <AlbumList albums={albums} /> : <NoPageContent label="albums" />}
    </Grid>
  );
};

export default Albums;
