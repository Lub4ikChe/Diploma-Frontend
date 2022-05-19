import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Grid, Box, CircularProgress } from '@mui/material';
import { StyledStepButton } from './styles';

import { StyledDivider } from '../../Divider';
import CloseHeaderModal from '../../Modal/CloseHeaderModal';
import StepperWrapper from '../../StepperWrapper';
import AddAlbumInfoStep from './AddAlbumInfoStep';
import UploadAlbumImageStep from './UploadAlbumImageStep';
import UploadAlbumTracksStep from './UploadAlbumTracksStep';
import ErrorAlert from '../../ErrorAlert';

import { UploadTrackProps } from './types';
import { routerLinks } from '../../../router/router-links.enum';

import { uploadAlbum } from '../../../store/action-creators/albums';
import { useTypedSelector } from '../../../hooks/use-typed-selector';

const UploadAlbum: React.FC<UploadTrackProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { uploadAlbumLoading } = useTypedSelector(state => state.albums);

  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [error, setError] = React.useState<string>('');

  const [albumName, setAlbumName] = React.useState<string>('');

  const [imageSrc, setImageSrc] = React.useState<string>('');
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  const [audioNames, setAudioNames] = React.useState<string[]>([]);
  const [audioFiles, setAudioFiles] = React.useState<FileList | null>(null);

  const onAlbumNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAlbumName(event.target.value);
  };

  const onImageFileInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file: File | null = event.target.files && event.target.files[0];
    const imgSrc = (file && window.URL.createObjectURL(file)) || '';
    setImageFile(file);
    setImageSrc(imgSrc);
  };

  const onAudioFileInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files: FileList | null = event.target && event.target.files;
    const audNames = Array.from(files || []).map(file => file.name);
    setAudioFiles(files);
    setAudioNames(audNames || []);
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
      if (albumName && imageFile && audioFiles) {
        goToNextStep();
        const result = await uploadAlbum(albumName, imageFile, audioFiles)(dispatch);
        if (result) {
          navigate(routerLinks.MY_ALBUMS);
          closeModal();
        }
      }
    } catch {
      setError('Something went wrong, try later again');
    }
  };

  const backStepButtonDisabled = activeStep === 0;
  const saveOrNextButtonDisabled =
    (activeStep === 0 && !albumName.length) ||
    (activeStep === 1 && !imageFile) ||
    (activeStep === 2 && !audioFiles) ||
    (activeStep === 3 && uploadAlbumLoading);

  const onSaveOrNextButtonClick = activeStep >= 2 ? onSaveClick : goToNextStep;
  const saveOrNextButtonText = activeStep >= 2 ? 'Save' : 'Next';

  return (
    <Grid container minHeight="360px" direction="column">
      <CloseHeaderModal label="Upload album" closeModal={closeModal} />
      <StyledDivider />
      <StepperWrapper variant="uploadAlbum" activeStep={activeStep}>
        {error && <ErrorAlert message={error} />}
        {!uploadAlbumLoading ? (
          <>
            {activeStep === 0 && (
              <AddAlbumInfoStep name={albumName} onNameChange={onAlbumNameChange} />
            )}
            {activeStep === 1 && (
              <UploadAlbumImageStep
                imageSrc={imageSrc}
                onFileInputChange={onImageFileInputChange}
                isUploadButtonDisabled={false}
              />
            )}
            {activeStep === 2 && (
              <UploadAlbumTracksStep
                audioNames={audioNames}
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

export default UploadAlbum;
