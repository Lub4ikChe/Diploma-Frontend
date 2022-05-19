import styled from '@emotion/styled';

import { Grid, IconButton, Link } from '@mui/material';

export const StyledGrid = styled(Grid)`
  :hover {
    background: #262d3b;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  font-size: 16px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const StyledIconButton = styled(IconButton)`
  right: 12px;
  position: relative;
`;
