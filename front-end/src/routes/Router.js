import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NewUser from '../pages/NewUser';

const Router = () => (
  <Routes>
    <Route path="/" element={ <Navigate to="login" replace /> } />
    <Route path="/login" element={ <Login /> } />
    <Route path="/create-user" element={ <NewUser /> } />
    <Route path="/home" element={ <Home /> } />
  </Routes>
);

export default Router;
