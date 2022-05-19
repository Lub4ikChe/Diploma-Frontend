import React from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import NoPageContent from '../../components/NoPageContent';
import AlbumList from '../../components/AlbumList';
import UploadAlbumModal from '../../components/UploadAlbumModal';

import { useTypedSelector } from '../../hooks/use-typed-selector';

const MyAlbums: React.FC = () => {
  const [uploadAlbumModalOpen, setUploadAlbumModalOpen] = React.useState(false);
  const { user } = useTypedSelector(state => state.userAuth);
  const albums = user?.uploadedAlbums || [];

  const handleCloseUploadAlbumModal = (): void => setUploadAlbumModalOpen(false);
  const handleOpenUploadAlbumModal = (): void => setUploadAlbumModalOpen(true);

  return (
    <Grid container direction="column">
      <Box mb={1} display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight={600} component="h2">
          My albums
        </Typography>
        <Button onClick={handleOpenUploadAlbumModal}>Upload albums</Button>
        {uploadAlbumModalOpen && (
          <UploadAlbumModal open={uploadAlbumModalOpen} closeModal={handleCloseUploadAlbumModal} />
        )}
      </Box>
      {albums.length ? <AlbumList albums={albums} /> : <NoPageContent label="albums" />}
    </Grid>
  );
};

export default MyAlbums;
