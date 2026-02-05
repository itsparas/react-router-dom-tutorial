import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

// Navbar component demonstrating NavLink for active styling
export default function Navbar() {
  const { user, logout } = useAuth();

  // NavLink provides 'isActive' for styling active links
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#646cff' : '#213547',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderBottom: isActive ? '2px solid #646cff' : '2px solid transparent',
  });

  return (
    <nav style={{
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      background: '#f9f9f9',
      borderBottom: '1px solid #ddd',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/products" style={linkStyle}>Products</NavLink>
      <NavLink to="/dashboard" style={linkStyle}>Dashboard (Protected)</NavLink>
      
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {user ? (
          <>
            <span>Welcome, {user.username}!</span>
            <button onClick={logout} style={{ cursor: 'pointer' }}>Logout</button>
          </>
        ) : (
          <NavLink to="/login" style={linkStyle}>Login</NavLink>
        )}
      </div>
    </nav>
  );
}
