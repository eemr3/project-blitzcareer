import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NewUser from '../pages/NewUser';

const Router = () => (
  <Routes>
    <Route path="/" element={ <Login /> } />
    <Route path="/create-user" element={ <NewUser /> } />
    <Route path="/home" element={ <Home /> } />
  </Routes>
);

export default Router;
