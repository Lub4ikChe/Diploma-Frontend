import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';

import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

import { store } from './store';

import { useActions } from './hooks/use-actions';
import { useTypedSelector } from './hooks/use-typed-selector';

const App: React.FC = () => {
  const { appLoading } = useTypedSelector(state => state.app);
  const { checkIsAuth } = useActions();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      checkIsAuth();
    }
  }, []);

  if (appLoading) {
    return (
      <Box width="100vw" height="100vh" display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <NavBar>
      <AppRouter />
    </NavBar>
  );
};

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default AppWrapper;
