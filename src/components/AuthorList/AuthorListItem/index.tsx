import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, CardActionArea } from '@mui/material';
import { StyledBoxWrapper, StyledCard, StyledCardContent, StyledAvatar } from './styles';
import SnackBar from '../../SnackBar';

import { routerLinks } from '../../../router/router-links.enum';
import { AuthorListItemProps } from './types';

import { useTypedSelector } from '../../../hooks/use-typed-selector';

const AuthorListItem: React.FC<AuthorListItemProps> = ({ author }) => {
  const [showNotLogInAlert, setShowNotLogInAlert] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const { isAuth } = useTypedSelector(state => state.userAuth);

  const hideNotLogInAlert = (): void => setShowNotLogInAlert(false);

  const onAuthorClick = (authorId: string): void => {
    if (!isAuth) {
      setShowNotLogInAlert(true);
    } else {
      navigate(`${routerLinks.AUTHORS}/${authorId}`);
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
