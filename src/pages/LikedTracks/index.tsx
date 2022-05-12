import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Grid, Typography } from '@mui/material';

import NoPageContent from '../../components/NoPageContent';
import TrackList from '../../components/TrackList';

import { Track } from '../../models/track';
import { routerLinks } from '../../router/router-links.enum';

const tracks: Track[] = [];

const LikedTracks: React.FC = () => {
  const navigate = useNavigate();

  const goToTracks = (): void => {
    navigate(routerLinks.TRACKS);
  };

  return (
    <Grid container direction="column">
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={600} component="h2">
          Liked tracks
        </Typography>
        <Button onClick={goToTracks}>Go to tracks</Button>
      </Box>
      {tracks.length ? <TrackList tracks={tracks} /> : <NoPageContent label="tracks" />}
    </Grid>
  );
};

export default LikedTracks;
