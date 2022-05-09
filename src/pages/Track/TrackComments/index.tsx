import React from 'react';

import { Box, Typography } from '@mui/material';
import TrackComment from './TrackComment';

import { TrackCommentsProps } from './types';

const TrackComments: React.FC<TrackCommentsProps> = ({ comments }) => {
  return (
    <Box display="flex" flexDirection="column">
      {comments.length ? (
        comments.map(comment => <TrackComment key={comment.id} comment={comment} />)
      ) : (
        <Typography>There aren't any comments yet</Typography>
      )}
    </Box>
  );
};

export default TrackComments;
