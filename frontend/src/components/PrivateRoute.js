import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * PrivateRoute component for protecting routes that require authentication
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render if authenticated
 * @returns {React.ReactNode} The protected component or redirect to login
 */
const PrivateRoute = ({ children }) => {
  // Check if user is authenticated
  // This is just an example - replace with your actual authentication check
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  // If authenticated, render the protected component
  // Otherwise, redirect to login page
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;