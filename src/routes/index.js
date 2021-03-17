import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </>
  );
};

export default Routes;
