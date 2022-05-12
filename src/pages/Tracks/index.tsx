import React from 'react';

import { Grid } from '@mui/material';

import ContentPageHeader from '../../components/ContentPageHeader';
import NoPageContent from '../../components/NoPageContent';
import TrackList from '../../components/TrackList';
import ErrorAlert from '../../components/ErrorAlert';
import PaginationBox from '../../components/PaginationBox';
import SkeletonLoader from '../../components/SkeletonLoader';

import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useDebounce } from '../../hooks/use-debounce';

const Tracks: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  const [page, setPage] = React.useState<number>(0);
  const limit = 25;

  const { tracks, total, loading, error } = useTypedSelector(state => state.tracks);
  const { getTracks, setTracksLoading } = useActions();
  const debouncedGetTracks = useDebounce(getTracks, 400);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const nextPage = (): void => setPage(prev => prev + 1);
  const prevPage = (): void => setPage(prev => prev - 1);

  React.useEffect(() => {
    debouncedGetTracks(page, limit, search);
  }, [page, search]);

  // because of debounce need set to load
  // before debounced callback finished
  React.useEffect(() => {
    setTracksLoading(true);
  }, []);

  const nextBtnDisable = page + 1 === Math.ceil(total / limit);
  const prevBtnDisable = page === 0;

  const showTracks = !loading && !error;

  return (
    <Grid container direction="column">
      <ContentPageHeader label="tracks" search={search} onSearchChange={onSearchChange} />
      <SkeletonLoader isLoading={loading} />
      {error && <ErrorAlert message={error} />}
      {showTracks &&
        (tracks.length ? (
          <>
            <TrackList tracks={tracks} hash={page * limit} />
            {tracks.length < total && (
              <PaginationBox
                nextPage={nextPage}
                prevPage={prevPage}
                nextBtnDisable={nextBtnDisable}
                prevBtnDisable={prevBtnDisable}
                label="tracks"
              />
            )}
          </>
        ) : (
          <NoPageContent label="tracks" />
        ))}
    </Grid>
  );
};

export default Tracks;
