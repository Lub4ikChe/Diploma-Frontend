import React from 'react';

import { Grid } from '@mui/material';

import ContentPageHeader from '../../components/ContentPageHeader';
import NoPageContent from '../../components/NoPageContent';
import TrackList from '../../components/TrackList';

import { Track } from '../../models/track';

const tracks: Track[] = [];

const Tracks: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  return (
    <Grid container direction="column">
      <ContentPageHeader label="tracks" search={search} onSearchChange={onSearchChange} />
      {tracks.length ? <TrackList tracks={tracks} /> : <NoPageContent label="tracks" />}
    </Grid>
  );
};

export default Tracks;
