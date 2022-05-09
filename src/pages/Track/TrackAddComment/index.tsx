import React from 'react';

import { Box } from '@mui/material';
import { StyledTextField, StyledButton } from './styles';

const TrackAddComment: React.FC = () => {
  const [commentText, setCommentText] = React.useState<string>('');

  const onCommentTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCommentText(event.target.value);
  };

  return (
    <Box>
      <StyledTextField
        fullWidth
        type="text"
        label="Comment text"
        multiline
        value={commentText}
        variant="filled"
        margin="normal"
        InputProps={{
          disableUnderline: true,
        }}
        onChange={onCommentTextChange}
      />
      <StyledButton disabled={!commentText.length} variant="contained">
        Add comment
      </StyledButton>
    </Box>
  );
};

export default TrackAddComment;
