import React from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import NoPageContent from '../../components/NoPageContent';
import AlbumList from '../../components/AlbumList';

import { Album } from '../../models/album';

const albums: Album[] = [];

const MyAlbums: React.FC = () => {
  return (
    <Grid container direction="column">
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={600} component="h2">
          My albums
        </Typography>
        <Button>Upload albums</Button>
      </Box>
      {albums.length ? <AlbumList albums={albums} /> : <NoPageContent label="albums" />}
    </Grid>
  );
};

export default MyAlbums;
