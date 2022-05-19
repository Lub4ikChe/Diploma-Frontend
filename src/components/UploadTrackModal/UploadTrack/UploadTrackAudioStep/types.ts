export interface UploadTrackAudioStepProps {
  audioName?: string;
  onFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isUploadButtonDisabled: boolean;
}
