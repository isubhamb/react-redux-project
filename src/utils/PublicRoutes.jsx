import { Navigate, Outlet, useLocation } from 'react-router-dom';
import React from 'react';

const PublicRoutes = () => {
  const location = useLocation();

  return localStorage.getItem('USERNAME') !== 'Admin' ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  );
};

export default PublicRoutes;
