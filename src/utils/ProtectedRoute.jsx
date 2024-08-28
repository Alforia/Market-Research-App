import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, user }) {
  if (!user) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  return children;
}
