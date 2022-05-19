export interface AddTrackInfoStepProps {
  name: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  text: string;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
