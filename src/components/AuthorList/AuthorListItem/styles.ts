import styled from '@emotion/styled';

import { Box, Card, CardContent, Avatar } from '@mui/material';

export const StyledCard = styled(Card)`
  max-width: 202px;
  border-radius: 10px;
  background: none;
`;

export const StyledBoxWrapper = styled(Box)`
  background: #161d2a;
  color: white;
`;

export const StyledCardContent = styled(CardContent)`
  padding: 0 !important;

  overflow: hidden;
  white-space: nowrap;
  max-width: 150px;
`;

export const StyledAvatar = styled(Avatar)`
  height: 150px;
  width: 150px;
  margin-bottom: 10px;
`;
