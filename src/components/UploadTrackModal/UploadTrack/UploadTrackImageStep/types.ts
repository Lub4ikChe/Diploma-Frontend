export interface UploadTrackImageStepProps {
  imageSrc?: string;
  onFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isUploadButtonDisabled: boolean;
}
