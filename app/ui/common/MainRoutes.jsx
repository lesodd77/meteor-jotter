/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { App } from '../App';
import React from 'react';

// eslint-disable-next-line import/no-unresolved
const LoginPage = React.lazy(() => import('../auth/LoginPage'));
// eslint-disable-next-line import/no-unresolved
const JottersPage = React.lazy(() => import('../jotters/JottersPage'));
// eslint-disable-next-line import/no-unresolved
const NotFoundPage = React.lazy(() => import('./NotFoundPage'));



export const RoutePaths = {
  ROOT: '/',
  JOTTERS: '/jotters',
  
};

export const MainRoutes = () => (
  <BrowserRouter>
    <ReactRoutes>
    <Route path={RoutePaths.ROOT} element={<App />}>
    <Route element={<LoginPage />} index />
    <Route element={<JottersPage />} path={RoutePaths.JOTTERS} />
        <Route element={<NotFoundPage />} path="*" />
    </Route>
    </ReactRoutes>
  </BrowserRouter>
);
