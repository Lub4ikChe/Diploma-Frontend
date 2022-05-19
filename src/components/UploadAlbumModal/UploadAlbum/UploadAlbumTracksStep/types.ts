export interface UploadAlbumTracksStepProps {
  audioNames?: string[];
  onFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isUploadButtonDisabled: boolean;
}
