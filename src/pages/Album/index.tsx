import React from 'react';

import { Grid, Box, Typography, Tooltip } from '@mui/material';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';

import { routerLinks } from '../../router/router-links.enum';

import {
  StyledGridContainer,
  StyledBlurBox,
  StyledHeadsetRoundedIcon,
  StyledGriContentWrapper,
  StyledIconButton,
  StyledLink,
} from './styles';
import AlbumTrackList from './AlbumTrackList';

const album: any = null;

const AlbumPage: React.FC = () => {
  if (!album) {
    return null;
  }

  return (
    <StyledGridContainer container direction="column">
      <Grid item xs={12}>
        <Box overflow="hidden" position="relative">
          <StyledBlurBox
            position="absolute"
            ml={2}
            mr={2}
            style={{
              backgroundImage: `url(${album.image.url})`,
            }}
          />
          <Box m={2} mt={0} pt={2} mb={0} pb={2} display="flex">
            <Box component="img" height={230} width={230} src={album.image.url} alt={album.name} />
            <Box ml={2} display="flex" flexDirection="column">
              <Typography mt={6} variant="body1">
                Album
              </Typography>
              <Typography fontWeight={600} variant="h2">
                {album.name}
              </Typography>
              <Typography mt="auto" fontWeight={600} variant="body1">
                <StyledLink to={`${routerLinks.AUTHORS}/${album.author.id}`}>
                  {album.author.information?.name || 'N/A'}
                </StyledLink>
                <Tooltip placement="top" arrow title="Listens Count">
                  <StyledHeadsetRoundedIcon />
                </Tooltip>
                {album.listensCount}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <StyledGriContentWrapper item container p={2}>
        <Grid item xs={12} mb={3}>
          <Box display="flex" alignItems="center">
            <StyledIconButton>
              <PlayCircleRoundedIcon color="primary" />
            </StyledIconButton>
            <Typography fontWeight={600} variant="h4">
              Play
            </Typography>
          </Box>
        </Grid>
        <AlbumTrackList album={album} />
      </StyledGriContentWrapper>
    </StyledGridContainer>
  );
};

export default AlbumPage;
