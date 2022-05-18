import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, useNavigate } from 'react-router-dom';

import { Box, CircularProgress, Typography, Button } from '@mui/material';

import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Player from './components/Player';

import { store } from './store';

import { routerLinks } from './router/router-links.enum';
import { UserStatuses } from './models/user';

import { useActions } from './hooks/use-actions';
import { useTypedSelector } from './hooks/use-typed-selector';

const App: React.FC = () => {
  const { appLoading } = useTypedSelector(state => state.app);
  const { user, showActivateAccount } = useTypedSelector(state => state.userAuth);
  const { checkIsAuth, setShowActivateAccount, setUser } = useActions();

  const navigate = useNavigate();

  const onActivateOkCLick = (): void => {
    setShowActivateAccount(false);
    setUser(null);
    navigate(routerLinks.ROOT);
  };

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      checkIsAuth();
    }
  }, []);

  if (user?.status === UserStatuses.PENDING && showActivateAccount) {
    return (
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography color="white" variant="h4">
          Please activate your account.
          <br />
          We sent you confirmation email.
        </Typography>
        <Button variant="contained" onClick={onActivateOkCLick}>
          OK
        </Button>
      </Box>
    );
  }

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
      <Player />
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
