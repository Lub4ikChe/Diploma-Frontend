import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
