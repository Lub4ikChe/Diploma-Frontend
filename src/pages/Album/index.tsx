import React from 'react';
import { useParams } from 'react-router-dom';

import { Grid, Box, Typography, Tooltip, IconButton } from '@mui/material';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import { routerLinks } from '../../router/router-links.enum';
import { Track } from '../../models/track';

import {
  StyledGridContainer,
  StyledBlurBox,
  StyledHeadsetRoundedIcon,
  StyledGriContentWrapper,
  StyledIconButton,
  StyledLink,
} from './styles';

import AlbumTrackList from './AlbumTrackList';
import SkeletonLoader from '../../components/SkeletonLoader';
import ErrorAlert from '../../components/ErrorAlert';
import AlbumEditModal from './AlbumEditModal';
import DeleteAlbumModal from './DeleteAlbumModal';

import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';

import { getIsUserOwner } from './utils';

const AlbumPage: React.FC = () => {
  const { albumId } = useParams();
  const { specificAlbum: album, loading, error } = useTypedSelector(state => state.albums);
  const { user } = useTypedSelector(state => state.userAuth);
  const [showEditModal, setShowEditModal] = React.useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false);

  const userIsOwner = getIsUserOwner(user, albumId);

  const { getAlbum, setActiveTrack } = useActions();

  const onEditClick = (): void => {
    setShowEditModal(true);
  };

  const onEditModalClose = (): void => {
    setShowEditModal(false);
  };

  const onDeleteClick = (): void => {
    setShowDeleteModal(true);
  };

  const onDeleteModalClose = (): void => {
    setShowDeleteModal(false);
  };

  const onPlayButtonClick = (): void => {
    setActiveTrack(album?.tracks[0] as Track);
  };

  React.useEffect(() => {
    if (albumId) {
      getAlbum(albumId);
    }
  }, []);

  if (error && !showEditModal) {
    return <ErrorAlert message={error} />;
  }

  return (
    <StyledGridContainer container direction="column">
      {loading ? (
        <SkeletonLoader isLoading={loading} />
      ) : (
        <>
          <Grid item xs={12}>
            <Box overflow="hidden" position="relative">
              <StyledBlurBox position="absolute" ml={2} mr={2}>
                <Box
                  crossOrigin="anonymous"
                  component="img"
                  height="-webkit-fill-available"
                  width="-webkit-fill-available"
                  position="absolute"
                  src={album?.image?.url}
                  alt={album?.name}
                />
              </StyledBlurBox>
              <Box m={2} mt={0} pt={2} mb={0} pb={2} display="flex" flexWrap="wrap">
                <Box
                  component="img"
                  crossOrigin="anonymous"
                  height={230}
                  width={230}
                  src={album?.image?.url}
                  alt={album?.name}
                />
                <Box ml={2} display="flex" flexDirection="column">
                  <Typography mt={6} variant="body1">
                    Album
                  </Typography>
                  <Typography fontWeight={600} variant="h2">
                    {album?.name}
                  </Typography>
                  {userIsOwner && (
                    <Box>
                      <Tooltip placement="top" arrow title="Delete album">
                        <IconButton color="error" onClick={onDeleteClick}>
                          <DeleteForeverRoundedIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip placement="top" arrow title="Edit album">
                        <IconButton onClick={onEditClick} color="inherit">
                          <EditRoundedIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                  <Typography mt="auto" fontWeight={600} variant="body1">
                    <StyledLink to={`${routerLinks.AUTHORS}/${album?.author.id}`}>
                      {album?.author.information?.name || 'N/A'}
                    </StyledLink>
                    <Tooltip placement="top" arrow title="Listens Count">
                      <StyledHeadsetRoundedIcon />
                    </Tooltip>
                    {album?.listensCount}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <StyledGriContentWrapper item container p={2}>
            <Grid item xs={12} mb={3}>
              <Box display="flex" alignItems="center">
                <StyledIconButton onClick={onPlayButtonClick} disabled={!album?.tracks.length}>
                  <PlayCircleRoundedIcon color="primary" />
                </StyledIconButton>
                <Typography fontWeight={600} variant="h4">
                  Play
                </Typography>
              </Box>
            </Grid>
            {album && <AlbumTrackList album={album} />}
          </StyledGriContentWrapper>
          {album && showEditModal && (
            <AlbumEditModal onClose={onEditModalClose} open={showEditModal} album={album} />
          )}
          {album && showDeleteModal && (
            <DeleteAlbumModal onClose={onDeleteModalClose} open={showDeleteModal} album={album} />
          )}
        </>
      )}
    </StyledGridContainer>
  );
};

export default AlbumPage;
