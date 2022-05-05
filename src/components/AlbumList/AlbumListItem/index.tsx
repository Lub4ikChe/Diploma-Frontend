import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, CardActionArea, Typography } from '@mui/material';
import { StyledLink, StyledCard, StyledBoxWrapper, StyledCardContent } from './styles';

import { AlbumListItemProps } from './types';
import { routerLinks } from '../../../router/router-links.enum';

const AlbumListItem: React.FC<AlbumListItemProps> = ({ album }) => {
  const navigate = useNavigate();

  const onAlbumClick = (albumId: string): void => {
    navigate(`${routerLinks.ALBUMS}/${albumId}`);
  };

  return (
    <StyledCard>
      <CardActionArea onClick={() => onAlbumClick(album.id)}>
        <StyledBoxWrapper p={2}>
          <Box
            component="img"
            height={170}
            width={170}
            src={album.image.url}
            alt={album.name}
            mb={1}
          />
          <StyledCardContent>
            <Typography fontWeight={600} variant="h5">
              {album.name}
            </Typography>
            <StyledLink
              onClick={e => e.stopPropagation()}
              to={`${routerLinks.AUTHORS}/${album.author.id}}`}
            >
              {album.author.information?.name || 'N/A'}
            </StyledLink>
          </StyledCardContent>
        </StyledBoxWrapper>
      </CardActionArea>
    </StyledCard>
  );
};

export default AlbumListItem;
