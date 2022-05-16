import styled from '@emotion/styled';

import { IconButton } from '@mui/material';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';

export const StyledIcon = styled(HeadphonesRoundedIcon)`
  vertical-align: middle;
`;

export const StyledEditOrLikeIconButton = styled(IconButton)`
  padding: 0;
  color: #1a76d2;
`;

export const StyledDeleteOrDownloadIconButton = styled(IconButton)`
  padding: 0;
  color: #1a76d2;

  margin-right: 10px;
`;

export const StyledIconProps = {
  width: 40,
  height: 40,
};
