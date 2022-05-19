export interface FileUploadProps {
  onFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isUploadButtonDisabled: boolean;
  label: string;
  accept: AcceptUploadFiles;
  multiple?: boolean;
}

export enum AcceptUploadFiles {
  IMAGE = 'image/*',
  AUDIO = 'audio/*',
}
