import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Grid, Box, CircularProgress } from '@mui/material';
import { StyledStepButton } from './styles';

import { StyledDivider } from '../../Divider';
import CloseHeaderModal from '../../Modal/CloseHeaderModal';
import StepperWrapper from './StepperWrapper';
import AddTrackInfoStep from './AddTrackInfoStep';
import UploadTrackImageStep from './UploadTrackImageStep';
import UploadTrackAudioStep from './UploadTrackAudioStep';
import ErrorAlert from '../../ErrorAlert';

import { UploadTrackProps } from './types';
import { routerLinks } from '../../../router/router-links.enum';

import { uploadTrack } from '../../../store/action-creators/tracks';
import { useTypedSelector } from '../../../hooks/use-typed-selector';

const UploadTrack: React.FC<UploadTrackProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { uploadTrackLoading } = useTypedSelector(state => state.tracks);

  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [error, setError] = React.useState<string>('');

  const [trackName, setTrackName] = React.useState<string>('');
  const [trackText, setTrackText] = React.useState<string>('');

  const [imageSrc, setImageSrc] = React.useState<string>('');
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  const [audioName, setAudioNam] = React.useState<string>('');
  const [audioFile, setAudioFile] = React.useState<File | null>(null);

  const onTrackNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTrackName(event.target.value);
  };

  const onTrackTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTrackText(event.target.value);
  };

  const onImageFileInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file: File | null = event.target.files && event.target.files[0];
    const imgSrc = (file && window.URL.createObjectURL(file)) || '';
    setImageFile(file);
    setImageSrc(imgSrc);
  };

  const onAudioFileInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file: File | null = event.target.files && event.target.files[0];
    const audName = file?.name;
    setAudioFile(file);
    setAudioNam(audName || '');
  };

  const goToBackStep = (): void => {
    setError('');
    setActiveStep(prev => prev - 1);
  };

  const goToNextStep = (): void => {
    setActiveStep(prev => prev + 1);
  };

  const onSaveClick = async (): Promise<void> => {
    try {
      if (trackName && imageFile && audioFile) {
        goToNextStep();
        const result = await uploadTrack(trackName, trackText, imageFile, audioFile)(dispatch);
        if (result) {
          navigate(routerLinks.MY_TRACKS);
          closeModal();
        }
      }
    } catch {
      setError('Something went wrong, try later again');
    }
  };

  const backStepButtonDisabled = activeStep === 0;
  const saveOrNextButtonDisabled =
    (activeStep === 0 && !trackName.length) ||
    (activeStep === 1 && !imageFile) ||
    (activeStep === 2 && !audioFile) ||
    (activeStep === 3 && uploadTrackLoading);

  const onSaveOrNextButtonClick = activeStep >= 2 ? onSaveClick : goToNextStep;
  const saveOrNextButtonText = activeStep >= 2 ? 'Save' : 'Next';

  return (
    <Grid container minHeight="360px" direction="column">
      <CloseHeaderModal label="Upload track" closeModal={closeModal} />
      <StyledDivider />
      <StepperWrapper activeStep={activeStep}>
        {error && <ErrorAlert message={error} />}

        {!uploadTrackLoading ? (
          <>
            {activeStep === 0 && (
              <AddTrackInfoStep
                name={trackName}
                onNameChange={onTrackNameChange}
                text={trackText}
                onTextChange={onTrackTextChange}
              />
            )}
            {activeStep === 1 && (
              <UploadTrackImageStep
                imageSrc={imageSrc}
                onFileInputChange={onImageFileInputChange}
                isUploadButtonDisabled={false}
              />
            )}
            {activeStep === 2 && (
              <UploadTrackAudioStep
                audioName={audioName}
                onFileInputChange={onAudioFileInputChange}
                isUploadButtonDisabled={false}
              />
            )}
          </>
        ) : (
          <Box height="200px" display="flex" alignItems="center" justifyContent="center">
            <CircularProgress />
          </Box>
        )}
      </StepperWrapper>
      <Grid container spacing={1} mt="auto">
        <Grid item xs={12} sm={6} md={6}>
          <StyledStepButton
            onClick={goToBackStep}
            disabled={backStepButtonDisabled}
            fullWidth
            variant="contained"
          >
            Back
          </StyledStepButton>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledStepButton
            onClick={onSaveOrNextButtonClick}
            disabled={saveOrNextButtonDisabled}
            fullWidth
            variant="contained"
          >
            {saveOrNextButtonText}
          </StyledStepButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UploadTrack;
