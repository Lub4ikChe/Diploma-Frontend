import React from 'react';

import { Grid, Tooltip } from '@mui/material';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';

import { StyledGrid, StyledGridWrapper } from './styles';

import TrackListItems from './TrackListItem';

import { TrackListProps } from './types';

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  if (!tracks.length) {
    return null;
  }

  return (
    <StyledGridWrapper container direction="column" p={1} pl={2} pr={2}>
      <StyledGrid container p={1} pl={3}>
        <Grid item xs={0.6}>
          #
        </Grid>
        <Grid item xs={4.4}>
          Name
        </Grid>
        <Grid item xs={3}>
          Album
        </Grid>
        <Grid item xs={3}>
          Added Date
        </Grid>
        <Grid textAlign="center" item xs={1}>
          <Tooltip placement="top" arrow title="Listens Count">
            <HeadphonesRoundedIcon />
          </Tooltip>
        </Grid>
      </StyledGrid>
      {tracks.map((track, index) => {
        return <TrackListItems key={track.id} track={track} hashNumber={index + 1} />;
      })}
    </StyledGridWrapper>
  );
};

export default TrackList;
