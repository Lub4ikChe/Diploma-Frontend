import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, CardActionArea, Typography } from '@mui/material';
import { StyledLink, StyledCard, StyledBoxWrapper, StyledCardContent } from './styles';
import SnackBar from '../../SnackBar';

import { AlbumListItemProps } from './types';
import { routerLinks } from '../../../router/router-links.enum';

import { useTypedSelector } from '../../../hooks/use-typed-selector';

const AlbumListItem: React.FC<AlbumListItemProps> = ({ album }) => {
  const [showNotLogInAlert, setShowNotLogInAlert] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const { isAuth } = useTypedSelector(state => state.userAuth);

  const hideNotLogInAlert = (): void => setShowNotLogInAlert(false);

  const onAlbumClick = (albumId: string): void => {
    if (!isAuth) {
      setShowNotLogInAlert(true);
    } else {
      navigate(`${routerLinks.ALBUMS}/${albumId}`);
    }
  };

  return (
    <StyledCard>
      <SnackBar
        open={showNotLogInAlert}
        onClose={hideNotLogInAlert}
        text="Please login in order to open this page"
        severity="warning"
      />
      <CardActionArea onClick={() => onAlbumClick(album.id)}>
        <StyledBoxWrapper p={2}>
          <Box
            component="img"
            height={170}
            width={170}
            src={album.image.url}
            alt={album.name}
            mb={1}
            crossOrigin="anonymous"
          />
          <StyledCardContent>
            <Typography fontWeight={600} variant="h5">
              {album.name}
            </Typography>
            <StyledLink
              onClick={e => e.stopPropagation()}
              to={`${routerLinks.AUTHORS}/${album.author.id}`}
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
