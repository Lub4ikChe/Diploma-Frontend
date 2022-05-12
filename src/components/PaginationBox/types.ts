export interface PaginationBoxProps {
  nextPage: () => void;
  prevPage: () => void;
  nextBtnDisable: boolean;
  prevBtnDisable: boolean;
  label: 'tracks' | 'albums' | 'authors';
}
