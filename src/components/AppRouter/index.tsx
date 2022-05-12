import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { routerLinks } from '../../router/router-links.enum';
import { privateRoutes, publicRoutes } from '../../router/routes';

import { useTypedSelector } from '../../hooks/use-typed-selector';

const AppRouter: React.FC = () => {
  const { isAuth } = useTypedSelector(state => state.userAuth);
  return (
    <Routes>
      {isAuth &&
        privateRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

      {publicRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path={routerLinks.ROOT} element={<div />} />
      <Route path={routerLinks.ALL} element={<Navigate to={routerLinks.ROOT} />} />
    </Routes>
  );
};

export default AppRouter;
