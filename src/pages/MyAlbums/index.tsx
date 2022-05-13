import React from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import NoPageContent from '../../components/NoPageContent';
import AlbumList from '../../components/AlbumList';

import { useTypedSelector } from '../../hooks/use-typed-selector';

const MyAlbums: React.FC = () => {
  const { user } = useTypedSelector(state => state.userAuth);
  const albums = user?.uploadedAlbums || [];

  return (
    <Grid container direction="column">
      <Box mb={1} display="flex" justifyContent="space-between" alignItems="center">
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
