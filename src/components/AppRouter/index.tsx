import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { routerLinks } from '../../router/router-links.enum';
import { privateRoutes, publicRoutes } from '../../router/routes';

const AppRouter: React.FC = () => {
  const isAuth = false;
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
