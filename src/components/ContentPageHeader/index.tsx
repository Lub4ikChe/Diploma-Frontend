import React from 'react';

import { Box, Typography } from '@mui/material';
import { StyledSearchField } from './styles';

import { ContentPageHeaderProps } from './types';

const ContentPageHeader: React.FC<ContentPageHeaderProps> = ({ label, search, onSearchChange }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" mb={2}>
      <Typography fontWeight={600} component="h2">
        Available {label}
      </Typography>
      <Box>
        <StyledSearchField
          label={`Search ${label}...`}
          type="search"
          variant="filled"
          margin="normal"
          fullWidth
          value={search}
          onChange={onSearchChange}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Box>
    </Box>
  );
};

export default ContentPageHeader;
