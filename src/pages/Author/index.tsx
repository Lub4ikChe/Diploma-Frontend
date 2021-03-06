import React from 'react';
import { useParams } from 'react-router-dom';

import { Grid, Box, Typography } from '@mui/material';
import { StyledGridAuthorPageWrapper, StyledGridHeaderWrapper, StyledAvatar } from './styles';

import TrackList from '../../components/TrackList';
import AlbumList from '../../components/AlbumList';
import SkeletonLoader from '../../components/SkeletonLoader';
import ErrorAlert from '../../components/ErrorAlert';

import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';

const Author: React.FC = () => {
  const { authorId } = useParams();
  const { specificAuthor: author, loading, error } = useTypedSelector(state => state.authors);

  const { getAuthor } = useActions();

  React.useEffect(() => {
    if (authorId) {
      getAuthor(authorId);
    }
  }, []);

  if (error) {
    return <ErrorAlert message={error} />;
  }

  return (
    <StyledGridAuthorPageWrapper container>
      <SkeletonLoader isLoading={loading} />
      {!loading && (
        <>
          <StyledGridHeaderWrapper p={2} item xs={12}>
            <Box display="flex" flexWrap="wrap">
              <StyledAvatar
                src={author?.information?.photo?.url}
                alt={author?.information?.name}
                imgProps={{
                  crossOrigin: 'anonymous',
                }}
              />
              <Box ml={2} display="flex" flexDirection="column">
                <Typography mt={6} variant="h5">
                  Author
                </Typography>
                <Typography fontWeight={600} variant="h3">
                  {author?.information?.name}
                </Typography>
              </Box>
            </Box>
          </StyledGridHeaderWrapper>
          <Grid p={2} item xs={12}>
            <Typography variant="h5">Author's resent uploaded tracks: </Typography>
            {author?.uploadedTracks?.length ? (
              <TrackList tracks={author?.uploadedTracks} />
            ) : (
              <Typography variant="body1">Author hasn't uploaded any track yet :(</Typography>
            )}
          </Grid>
          <Grid p={2} item xs={12}>
            <Typography variant="h5">Author's resent uploaded albums: </Typography>
            {author?.uploadedAlbums?.length ? (
              <Box mt={2}>
                <AlbumList albums={author?.uploadedAlbums} />
              </Box>
            ) : (
              <Typography variant="body1">Author hasn't uploaded any album yet :(</Typography>
            )}
          </Grid>
        </>
      )}
    </StyledGridAuthorPageWrapper>
  );
};

export default Author;
