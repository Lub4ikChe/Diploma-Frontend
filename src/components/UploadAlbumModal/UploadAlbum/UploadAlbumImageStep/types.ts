export interface UploadAlbumImageStepProps {
  imageSrc?: string;
  onFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isUploadButtonDisabled: boolean;
}
