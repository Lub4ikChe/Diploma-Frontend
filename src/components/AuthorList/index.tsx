import React from 'react';

import GridContainer from '../GridContainer';
import AuthorListItem from './AuthorListItem';

import { AuthorListProps } from './types';

const AuthorList: React.FC<AuthorListProps> = ({ authors }) => {
  return (
    <GridContainer>
      {authors.map(author => {
        return <AuthorListItem key={author.id} author={author} />;
      })}
    </GridContainer>
  );
};

export default AuthorList;
