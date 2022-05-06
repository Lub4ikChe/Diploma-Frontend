import React from 'react';

import { Grid } from '@mui/material';

import ContentPageHeader from '../../components/ContentPageHeader';
import NoPageContent from '../../components/NoPageContent';
import AuthorList from '../../components/AuthorList';

import { User } from '../../entities/user';

const authors: User[] = [];

const Authors: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  return (
    <Grid container direction="column">
      <ContentPageHeader label="authors" search={search} onSearchChange={onSearchChange} />
      {authors.length ? <AuthorList authors={authors} /> : <NoPageContent label="authors" />}
    </Grid>
  );
};

export default Authors;
