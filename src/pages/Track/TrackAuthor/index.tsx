import React from 'react';

import { Box, Typography } from '@mui/material';
import { StyledLink } from './styles';

import { TrackAuthorProps } from './types';
import { routerLinks } from '../../../router/router-links.enum';

const TrackAuthor: React.FC<TrackAuthorProps> = ({ author }) => {
  return (
    <Box display="flex">
      <Box
        component="img"
        height={150}
        width={150}
        border="1px solid #1a76d2"
        borderRadius={50}
        src={author.information?.photo?.url}
        alt={author.information?.name}
      />
      <Box ml={2} display="flex" flexDirection="column">
        <Typography mt={5} variant="h5">
          Author Name:
        </Typography>
        <StyledLink to={`${routerLinks.AUTHORS}/${author.id}`}>
          <Typography variant="h5">{author.information?.name || 'N/A'}</Typography>
        </StyledLink>
      </Box>
    </Box>
  );
};

export default TrackAuthor;
