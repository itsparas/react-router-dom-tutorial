import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

/**
 * ProtectedRoute Component
 * 
 * Demonstrates PROTECTED ROUTES (AUTH GUARDS) in React Router v6.
 * 
 * This component checks if the user is authenticated:
 * - If authenticated: renders the children (protected content)
 * - If not authenticated: redirects to login page
 * 
 * The 'state' prop preserves the attempted URL so we can 
 * redirect back after successful login.
 */
export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect to login, but save the attempted location
    // so we can redirect back after login
    return (
      <Navigate 
        to="/login" 
        state={{ from: location }} 
        replace 
      />
    );
  }

  return children;
}
