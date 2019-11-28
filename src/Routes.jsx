import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './Header';

const pages = {
  stats: lazy(() => import('./pages/Stats')),
  facility: lazy(() => import('./pages/Facility')),
};

const getRoute = page => {
  const path = `/${page}/:lang?`;
  const Component = pages[page];
  return (
    <Route path={path}>
      <Header />
      <Component />
    </Route>
  );
};

function Routes() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        {getRoute('stats')}
        {getRoute('facility')}
        <Redirect to="/stats/:lang?" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
