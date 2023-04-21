import { Navigate, Outlet, useLocation } from 'react-router-dom';
import React from 'react';

const PrivateRoutes = () => {
  const location = useLocation();

  return localStorage.getItem('USERNAME') === 'Admin' ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
