import React from 'react';

import { Grid } from '@mui/material';

import ContentPageHeader from '../../components/ContentPageHeader';
import NoPageContent from '../../components/NoPageContent';
import AuthorList from '../../components/AuthorList';
import ErrorAlert from '../../components/ErrorAlert';
import PaginationBox from '../../components/PaginationBox';
import SkeletonLoader from '../../components/SkeletonLoader';

import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';
import { useDebounce } from '../../hooks/use-debounce';

const Authors: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  const [page, setPage] = React.useState<number>(0);
  const limit = 25;

  const { authors, total, loading, error } = useTypedSelector(state => state.authors);
  const { getAuthors, setAuthorsLoading } = useActions();
  const debouncedGetAuthors = useDebounce(getAuthors, 400);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const nextPage = (): void => setPage(prev => prev + 1);
  const prevPage = (): void => setPage(prev => prev - 1);

  React.useEffect(() => {
    debouncedGetAuthors(page, limit, search);
  }, [page, search]);

  // because of debounce need set to load
  // before debounced callback finished
  React.useEffect(() => {
    setAuthorsLoading(true);
  }, []);

  const nextBtnDisable = page + 1 === Math.ceil(total / limit);
  const prevBtnDisable = page === 0;

  const showAuthors = !loading && !error;

  return (
    <Grid container direction="column">
      <ContentPageHeader label="authors" search={search} onSearchChange={onSearchChange} />
      <SkeletonLoader isLoading={loading} />
      {error && <ErrorAlert message={error} />}
      {showAuthors &&
        (authors.length ? (
          <>
            <AuthorList authors={authors} />
            {authors.length < total && (
              <PaginationBox
                nextPage={nextPage}
                prevPage={prevPage}
                nextBtnDisable={nextBtnDisable}
                prevBtnDisable={prevBtnDisable}
                label="authors"
              />
            )}
          </>
        ) : (
          <NoPageContent label="authors" />
        ))}
    </Grid>
  );
};

export default Authors;
