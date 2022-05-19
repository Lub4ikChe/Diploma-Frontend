import React from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import NoPageContent from '../../components/NoPageContent';
import TrackList from '../../components/TrackList';
import UploadTrackModal from '../../components/UploadTrackModal';

import { useTypedSelector } from '../../hooks/use-typed-selector';

const MyTracks: React.FC = () => {
  const [uploadTrackModalOpen, setUploadTrackModalOpen] = React.useState(false);
  const { user } = useTypedSelector(state => state.userAuth);
  const tracks = user?.uploadedTracks || [];

  const handleCloseUploadTrackModal = (): void => setUploadTrackModalOpen(false);
  const handleOpenUploadTrackModal = (): void => setUploadTrackModalOpen(true);

  return (
    <Grid container direction="column">
      <Box mb={1} display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight={600} component="h2">
          My tracks
        </Typography>
        <Button onClick={handleOpenUploadTrackModal}>Upload tracks</Button>
        {uploadTrackModalOpen && (
          <UploadTrackModal open={uploadTrackModalOpen} closeModal={handleCloseUploadTrackModal} />
        )}
      </Box>
      {tracks.length ? <TrackList tracks={tracks} /> : <NoPageContent label="tracks" />}
    </Grid>
  );
};

export default MyTracks;
