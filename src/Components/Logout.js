// Logout.js
import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  onLogout();
  return <Redirect to="/" />;
};

export default Logout;
