import React from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import NoPageContent from '../../components/NoPageContent';
import TrackList from '../../components/TrackList';

import { useTypedSelector } from '../../hooks/use-typed-selector';

const MyTracks: React.FC = () => {
  const { user } = useTypedSelector(state => state.userAuth);
  const tracks = user?.uploadedTracks || [];

  return (
    <Grid container direction="column">
      <Box mb={1} display="flex" justifyContent="space-between" alignItems="center">
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
