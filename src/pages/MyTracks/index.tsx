import React from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import NoPageContent from '../../components/NoPageContent';
import TrackList from '../../components/TrackList';

import { Track } from '../../models/track';

const tracks: Track[] = [];

const MyTracks: React.FC = () => {
  return (
    <Grid container direction="column">
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={600} component="h2">
          My tracks
        </Typography>
        <Button>Upload tracks</Button>
      </Box>
      {tracks.length ? <TrackList tracks={tracks} /> : <NoPageContent label="tracks" />}
    </Grid>
  );
};

export default MyTracks;
