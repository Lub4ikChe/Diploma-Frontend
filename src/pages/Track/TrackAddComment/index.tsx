import React from 'react';

import { Box } from '@mui/material';
import { StyledTextField, StyledButton } from './styles';

import { useActions } from '../../../hooks/use-actions';
import { useTypedSelector } from '../../../hooks/use-typed-selector';

const TrackAddComment: React.FC = () => {
  const [commentText, setCommentText] = React.useState<string>('');

  const { specificTrack, commentOperationLoading } = useTypedSelector(state => state.tracks);
  const { addCommentToTrack } = useActions();

  const onCommentTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCommentText(event.target.value);
  };

  const onAddCommentClick = (): void => {
    if (specificTrack) {
      addCommentToTrack(specificTrack.id, commentText);
      setCommentText('');
    }
  };

  const addCommentButtonDisabled = !commentText.length || commentOperationLoading;

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
      <StyledButton
        disabled={addCommentButtonDisabled}
        variant="contained"
        onClick={onAddCommentClick}
      >
        Add comment
      </StyledButton>
    </Box>
  );
};

export default TrackAddComment;
