import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the token from the URL parameters
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    console.log('Token received from URL:', token);

    if (token) {
      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Redirect to the home page
      navigate('/');
    } else {
      console.log('No token found in URL.');
    }
  }, [navigate]);

  return (
    <div>
      <p>Processing authentication, please wait...</p>
    </div>
  );
};

export default AuthCallback;
