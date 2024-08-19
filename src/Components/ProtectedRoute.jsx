import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, redirectPathIfLoggedIn = "/", redirectPathIfNotLoggedIn = "/login", children }) => {
  if (loggedIn && redirectPathIfLoggedIn) {
    // If the user is logged in and tries to access a route meant for unauthenticated users (like "/login"), redirect to a different page (e.g., "/").
    return <Navigate to={redirectPathIfLoggedIn} />;
  }

  if (!loggedIn && redirectPathIfNotLoggedIn) {
    // If the user is not logged in and tries to access a protected route (like "/dashboard"), redirect to the login page.
    return <Navigate to={redirectPathIfNotLoggedIn} />;
  }

  return children;
};

export default ProtectedRoute;
