import React from 'react';

import { Box, Typography, Button, Grid } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import { StyledTextField } from '../../TrackAddComment/styles';
import { StyledEditIcon, StyledDeleteIcon, StyledSaveButton } from './styles';

import { TrackCommentProps } from './types';

import { useTypedSelector } from '../../../../hooks/use-typed-selector';
import { useActions } from '../../../../hooks/use-actions';

import { getIsUserCommentOwner } from './utils';

const TrackComment: React.FC<TrackCommentProps> = ({ comment }) => {
  const [showEditComment, setShowEditComment] = React.useState<boolean>(false);
  const [editedCommentText, setEditedCommentText] = React.useState<string>(comment.text || '');

  const { user } = useTypedSelector(state => state.userAuth);
  const { specificTrack, commentOperationLoading } = useTypedSelector(state => state.tracks);
  const userIsAuthorOwner = getIsUserCommentOwner(user, comment.author.id);

  const { updateCommentToTrack, deleteCommentToTrack } = useActions();

  const onEditedCommentTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEditedCommentText(event.target.value);
  };

  const onEditIconClick = (): void => {
    setShowEditComment(true);
  };

  const onCancelEditButtonClick = (): void => {
    setShowEditComment(false);
  };

  const onSaveButtonClick = (): void => {
    setShowEditComment(false);

    if (editedCommentText === comment.text) {
      return;
    }

    if (specificTrack) {
      updateCommentToTrack(specificTrack.id, comment.id, editedCommentText);
    }
  };

  const onRemoveCommentClick = (): void => {
    if (specificTrack) {
      deleteCommentToTrack(specificTrack.id, comment.id);
    }
  };

  const saveButtonDisabled = !editedCommentText.length || commentOperationLoading;
  const showEditAndDeleteIcons = userIsAuthorOwner && !showEditComment;

  return (
    <Box mb={1} display="flex" flexDirection="column">
      <Box display="flex">
        <Box
          component="img"
          height={50}
          width={50}
          border="1px solid #1a76d2"
          borderRadius={50}
          src={comment.author.information?.photo?.url}
          alt={comment.author.information?.name}
          crossOrigin="anonymous"
        />
        <Box ml={1} display="flex" flexDirection="column" justifyContent="space-between">
          <Typography>{comment.author.information?.name}</Typography>
          <Typography>{new Date(comment.commentedAt).toLocaleDateString()}</Typography>
        </Box>
        {showEditAndDeleteIcons && (
          <Box ml="auto">
            <StyledEditIcon onClick={onEditIconClick} color="inherit">
              <EditRoundedIcon />
            </StyledEditIcon>
            <StyledDeleteIcon onClick={onRemoveCommentClick} color="error">
              <DeleteForeverRoundedIcon />
            </StyledDeleteIcon>
          </Box>
        )}
      </Box>
      <Box mt={1} display="flex">
        {showEditComment ? (
          <Box display="flex" flexDirection="column" width="100%">
            <StyledTextField
              fullWidth
              type="text"
              label="Edit comment text"
              multiline
              value={editedCommentText}
              variant="filled"
              margin="normal"
              onChange={onEditedCommentTextChange}
            />
            <Grid container spacing={1} mt={2}>
              <Grid item xs={12} sm={6} md={6}>
                <StyledSaveButton
                  fullWidth
                  variant="contained"
                  onClick={onSaveButtonClick}
                  disabled={saveButtonDisabled}
                >
                  Save
                </StyledSaveButton>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="error"
                  onClick={onCancelEditButtonClick}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Typography>{comment.text}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default TrackComment;
