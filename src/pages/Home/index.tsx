import React from 'react';

import { Grid, Box, Typography } from '@mui/material';

import TrackList from '../../components/TrackList';
import AlbumList from '../../components/AlbumList';
import SkeletonLoader from '../../components/SkeletonLoader';
import ErrorAlert from '../../components/ErrorAlert';

import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';

const Home: React.FC = () => {
  const { homeItems, loading, error } = useTypedSelector(state => state.home);

  const { getHomeItems } = useActions();

  React.useEffect(() => {
    getHomeItems();
  }, []);

  if (error) {
    return <ErrorAlert message={error} />;
  }

  return (
    <Grid container direction="column">
      <SkeletonLoader isLoading={loading} />
      {!loading && homeItems && (
        <>
          <Box display="contents" flexDirection="column">
            <Typography mb={1} fontWeight={600} component="h2">
              Recently added tracks
            </Typography>
            <TrackList tracks={homeItems.tracks} />
          </Box>
          <Box display="flex" flexDirection="column" mt={2}>
            <Typography mb={1} fontWeight={600} component="h2">
              Recently added albums
            </Typography>
            <AlbumList albums={homeItems.albums} />
          </Box>
        </>
      )}
    </Grid>
  );
};

export default Home;
