import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

/**
 * Login Page
 * 
 * Demonstrates:
 * 1. PROGRAMMATIC NAVIGATION with useNavigate
 * 2. Accessing LOCATION STATE passed from other routes
 * 3. Redirecting back to the originally requested page after login
 */
export default function Login() {
  const [username, setUsername] = useState('');
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the page user tried to visit before being redirected
  const from = location.state?.from?.pathname || '/dashboard';
  
  // Check if there's a message passed via state (from About page demo)
  const message = location.state?.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
      // Navigate to the original destination after login
      // replace: true removes the login page from history
      navigate(from, { replace: true });
    }
  };

  // If already logged in, show a different message
  if (user) {
    return (
      <div>
        <h1>✅ Already Logged In</h1>
        <p>You are logged in as <strong>{user.username}</strong>.</p>
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>🔐 Login</h1>
      
      {/* Show the redirect message */}
      {location.state?.from && (
        <div style={{ 
          padding: '1rem', 
          background: '#fff3cd', 
          borderRadius: '8px',
          marginBottom: '1rem',
          border: '1px solid #ffc107'
        }}>
          <p>⚠️ You must log in to access: <code>{from}</code></p>
        </div>
      )}

      {/* Show message from state (demo from About page) */}
      {message && (
        <div style={{ 
          padding: '1rem', 
          background: '#d4edda', 
          borderRadius: '8px',
          marginBottom: '1rem'
        }}>
          <p>📨 Message from previous page: {message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter any username"
            required
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              marginTop: '0.5rem',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>
        <button 
          type="submit"
          style={{ 
            padding: '0.75rem',
            background: '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>

      {/* Code explanation */}
      <section style={{ marginTop: '2rem' }}>
        <h3>📝 How it works:</h3>
        <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '4px', overflow: 'auto', fontSize: '0.85rem' }}>
{`// ProtectedRoute passes the attempted location
<Navigate to="/login" state={{ from: location }} />

// Login reads the state and redirects back
const location = useLocation();
const from = location.state?.from?.pathname || '/';

// After successful login
navigate(from, { replace: true });`}
        </pre>
      </section>
    </div>
  );
}
