import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NewUser from '../pages/NewUser';

const Router = () => (
  <Switch>
    <Route path="/login" component={ Login } default />
    <Route path="/create-user" component={ NewUser } />
    <Route path="/home" component={ Home } />
    <Redirect exact from="/" to="/login" />
    <Route erender={ () => <Redirect to="/login" /> } />
  </Switch>
);

export default Router;
