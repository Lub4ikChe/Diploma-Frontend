import React from 'react';

import { Grid, Box, Typography } from '@mui/material';

import TrackList from '../../components/TrackList';
import AlbumList from '../../components/AlbumList';

import { Track } from '../../models/track';
import { Album } from '../../models/album';

const tracks: Track[] = [];
const albums: Album[] = [];

const Home: React.FC = () => {
  return (
    <Grid container direction="column">
      <Box display="flex" flexDirection="column" mb={3}>
        <Typography fontWeight={600} component="h2">
          Recently added tracks
        </Typography>
        <TrackList tracks={tracks} />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography fontWeight={600} component="h2">
          Recently added albums
        </Typography>
        <AlbumList albums={albums} />
      </Box>
    </Grid>
  );
};

export default Home;
