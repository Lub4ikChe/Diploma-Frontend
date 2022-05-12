import React from 'react';

import { Grid, Typography } from '@mui/material';
import { StyledGridContainer, StyledGridItemWithBackground, StyledGridItem } from './styles';

import TrackHeader from './TrackHeader';
import TrackText from './TrackText';
import TrackAuthor from './TrackAuthor';
import TrackComments from './TrackComments';
import TrackAddComment from './TrackAddComment';

import { Track } from '../../models/track';

const track: Track | any = null;

const TrackPage: React.FC = () => {
  if (!track) {
    return null;
  }

  return (
    <StyledGridContainer container>
      <StyledGridItemWithBackground p={2} item xs={12}>
        <TrackHeader track={track} />
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
        <TrackComments comments={track.comments} />
        <TrackAddComment />
      </Grid>
    </StyledGridContainer>
  );
};

export default TrackPage;
