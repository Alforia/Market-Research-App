import { Navigate } from 'react-router-dom';

function PublicRoute({ children, user }) {
  if (user) {
    // If the user is logged in, redirect to the home page
    return <Navigate to="/" replace />;
  }

  return children;
}
