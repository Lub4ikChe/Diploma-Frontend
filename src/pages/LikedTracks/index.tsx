import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Grid, Typography } from '@mui/material';

import NoPageContent from '../../components/NoPageContent';
import TrackList from '../../components/TrackList';

import { routerLinks } from '../../router/router-links.enum';
import { useTypedSelector } from '../../hooks/use-typed-selector';

const LikedTracks: React.FC = () => {
  const navigate = useNavigate();

  const { user } = useTypedSelector(state => state.userAuth);
  const tracks = user?.likedTracks || [];

  const goToTracks = (): void => {
    navigate(routerLinks.TRACKS);
  };

  return (
    <Grid container direction="column">
      <Box mb={1} display="flex" justifyContent="space-between" alignItems="center">
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
