import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../../components/Loader';
import { DashboardLayout } from '../../layouts';
import { Auth } from '../../views';
import routes from './routes';

export default function AllRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<DashboardLayout />}>
          {routes.map(({ key, path, Element }) => {
            if (path === '') {
              return (
                <Route
                  index
                  key={key}
                  element={<Element />}
                />
              );
            }
            return (
              <Route
                key={key}
                path={path}
                element={<Element />}
              />
            );
          })}
        </Route>
      </Routes>
    </Suspense>
  );
}
