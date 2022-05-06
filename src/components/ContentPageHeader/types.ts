export interface ContentPageHeaderProps {
  search: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: 'tracks' | 'albums' | 'authors';
}
