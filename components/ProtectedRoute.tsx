import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useData } from '../context/DataContext';

const ProtectedRoute = () => {
  const { currentUser } = useData();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Block access to Jobs page for unverified users.
  if (!currentUser.isVerified) {
    const restrictedPaths = ['/user/jobs'];
    if (restrictedPaths.includes(location.pathname)) {
        return <Navigate to="/user/deposit" replace />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;
