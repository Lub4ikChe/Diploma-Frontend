import { styled as MuiStyled, experimental_sx as sx } from '@mui/system';

import { Grid } from '@mui/material';

export const StyledGridInfo = MuiStyled(Grid)(
  sx({
    top: { sm: '64px', xs: '56px' },
    borderBottom: 'solid 1px #212a3b',
    background: '#161d2a',
    alignItems: 'center',
    position: 'sticky',
    zIndex: 1,
  }),
);
