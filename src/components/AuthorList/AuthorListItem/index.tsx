import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, CardActionArea } from '@mui/material';
import { StyledBoxWrapper, StyledCard, StyledCardContent, StyledAvatar } from './styles';

import { routerLinks } from '../../../router/router-links.enum';
import { AuthorListItemProps } from './types';

const AuthorListItem: React.FC<AuthorListItemProps> = ({ author }) => {
  const navigate = useNavigate();

  const onAuthorClick = (authorId: string): void => {
    navigate(`${routerLinks.AUTHORS}/${authorId}`);
  };

  return (
    <StyledCard>
      <CardActionArea onClick={() => onAuthorClick(author.id)}>
        <StyledBoxWrapper p={2}>
          <StyledAvatar
            src={author.information?.photo?.url}
            alt={author.information?.name}
            imgProps={{
              crossOrigin: 'anonymous',
            }}
          />
          <StyledCardContent>
            <Typography fontWeight={600} variant="h5">
              {author.information?.name || 'N/A'}
            </Typography>
          </StyledCardContent>
        </StyledBoxWrapper>
      </CardActionArea>
    </StyledCard>
  );
};

export default AuthorListItem;
