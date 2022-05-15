import React from 'react';
import { useParams } from 'react-router-dom';

import { Grid, Typography, Box, CircularProgress } from '@mui/material';
import { StyledGridContainer, StyledGridItemWithBackground, StyledGridItem } from './styles';

import TrackHeader from './TrackHeader';
import TrackText from './TrackText';
import TrackAuthor from './TrackAuthor';
import TrackComments from './TrackComments';
import TrackAddComment from './TrackAddComment';
import SkeletonLoader from '../../components/SkeletonLoader';
import ErrorAlert from '../../components/ErrorAlert';
import TrackEditModal from './TrackEditModal';

import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';

import { getIsUserTrackOwner } from './utils';

const TrackPage: React.FC = () => {
  const { trackId } = useParams();
  const {
    specificTrack: track,
    loading,
    error,
    commentOperationLoading,
  } = useTypedSelector(state => state.tracks);
  const { user } = useTypedSelector(state => state.userAuth);
  const [showEditModal, setShowEditModal] = React.useState<boolean>(false);

  const userIsOwner = getIsUserTrackOwner(user, track?.uploadedBy.id);

  const { getTrack } = useActions();

  const onEditClick = (): void => {
    setShowEditModal(true);
  };

  const onEditModalClose = (): void => {
    setShowEditModal(false);
  };

  React.useEffect(() => {
    if (trackId) {
      getTrack(trackId);
    }
  }, []);

  if (error && !showEditModal) {
    return <ErrorAlert message={error} />;
  }

  if (!track) {
    return null;
  }

  return loading ? (
    <SkeletonLoader isLoading={loading} />
  ) : (
    <StyledGridContainer container>
      <StyledGridItemWithBackground p={2} item xs={12}>
        <TrackHeader userIsOwner={userIsOwner} track={track} onEditClick={onEditClick} />
      </StyledGridItemWithBackground>
      <StyledGridItem item xs={12} p={2}>
        <TrackText text={track.text} />
      </StyledGridItem>
      <StyledGridItem item xs={12} p={2}>
        <Typography mb={2} variant="h5">
          Uploaded by:
        </Typography>
        <TrackAuthor author={track.uploadedBy} />
      </StyledGridItem>
      <Grid item xs={12} p={2}>
        <Typography mb={2} variant="h5">
          Comments:
        </Typography>
        {commentOperationLoading ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : (
          <TrackComments comments={track.comments} />
        )}
        {!userIsOwner && <TrackAddComment />}
      </Grid>
      {track && showEditModal && (
        <TrackEditModal onClose={onEditModalClose} open={showEditModal} track={track} />
      )}
    </StyledGridContainer>
  );
};

export default TrackPage;
