import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useSelector(state => state.auth);
  return isLoggedIn ? children : <Navigate to="/signin" />
}

export default ProtectedRoute;