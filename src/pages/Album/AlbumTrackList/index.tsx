import React from 'react';

import { Grid, Tooltip, Typography } from '@mui/material';
import HeadsetRoundedIcon from '@mui/icons-material/HeadsetRounded';

import { StyledGridInfo } from './styles';

import { AlbumTrackListProps } from './types';
import AlbumTrack from './AlbumTrack';

const AlbumTrackList: React.FC<AlbumTrackListProps> = ({ album }) => {
  if (!album.tracks.length) {
    return <Typography>Album doesn't have any tracks</Typography>;
  }
  return (
    <>
      <StyledGridInfo item container p={1}>
        <Grid item xs={0.7}>
          #
        </Grid>
        <Grid item xs={10.3}>
          Name
        </Grid>
        <Grid textAlign="center" item xs={1}>
          <Tooltip placement="top" arrow title="Listens Count">
            <HeadsetRoundedIcon />
          </Tooltip>
        </Grid>
      </StyledGridInfo>
      {album.tracks?.map((track, index) => {
        return <AlbumTrack key={track.id} album={album} track={track} hashNumber={index + 1} />;
      })}
    </>
  );
};

export default AlbumTrackList;
