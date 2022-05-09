import React from 'react';
import { Box, Typography } from '@mui/material';

import { TrackCommentProps } from './types';

const TrackComment: React.FC<TrackCommentProps> = ({ comment }) => {
  return (
    <Box mb={1} display="flex" flexDirection="column">
      <Box display="flex">
        <Box
          component="img"
          height={50}
          width={50}
          border="1px solid #1a76d2"
          borderRadius={50}
          src={comment.author.information?.photo?.url}
          alt={comment.author.information?.name}
        />
        <Box ml={1} display="flex" flexDirection="column" justifyContent="space-between">
          <Typography>{comment.author.information?.name}</Typography>
          <Typography>{comment.commentedAt.toLocaleDateString()}</Typography>
        </Box>
      </Box>
      <Box mt={1}>
        <Typography>{comment.text}</Typography>
      </Box>
    </Box>
  );
};

export default TrackComment;
