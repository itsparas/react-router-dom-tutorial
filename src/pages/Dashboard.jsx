import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

/**
 * Dashboard Page (Lazy Loaded)
 * 
 * Demonstrates:
 * 1. NESTED ROUTES with <Outlet />
 * 2. LAZY LOADING - this component is loaded dynamically
 * 3. LAYOUT ROUTES - acts as a layout for nested pages
 * 
 * This component was loaded via React.lazy() and Suspense.
 */
export default function Dashboard() {
  const { user } = useAuth();

  const navLinkStyle = ({ isActive }) => ({
    padding: '0.5rem 1rem',
    background: isActive ? '#646cff' : '#f0f0f0',
    color: isActive ? 'white' : '#213547',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'all 0.2s'
  });

  return (
    <div>
      <h1>📊 Dashboard</h1>
      <p>Welcome to your dashboard, <strong>{user?.username}</strong>!</p>
      
      {/* Info box about lazy loading */}
      <div style={{ 
        padding: '1rem', 
        background: '#e8f5e9', 
        borderRadius: '8px',
        marginBottom: '1rem',
        border: '1px solid #4caf50'
      }}>
        <p>🚀 <strong>Lazy Loading:</strong> This Dashboard component was loaded on-demand using <code>React.lazy()</code>!</p>
        <p>Check the Network tab in DevTools - the chunk was loaded when you navigated here.</p>
      </div>

      {/* Nested navigation */}
      <nav style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        marginBottom: '1rem',
        padding: '1rem',
        background: '#f9f9f9',
        borderRadius: '8px'
      }}>
        <NavLink to="/dashboard" end style={navLinkStyle}>
          Overview
        </NavLink>
        <NavLink to="/dashboard/profile" style={navLinkStyle}>
          Profile
        </NavLink>
        <NavLink to="/dashboard/settings" style={navLinkStyle}>
          Settings (Also Lazy)
        </NavLink>
      </nav>

      {/* Nested route content renders here */}
      <div style={{ 
        padding: '1.5rem', 
        border: '1px solid #ddd', 
        borderRadius: '8px',
        minHeight: '200px',
        background: '#fff'
      }}>
        <Outlet />
      </div>

      {/* Code example */}
      <section style={{ marginTop: '2rem' }}>
        <h3>📝 Nested Routes Configuration:</h3>
        <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '4px', overflow: 'auto', fontSize: '0.85rem' }}>
{`<Route path="/dashboard" element={<Dashboard />}>
  {/* Index route - shows when at /dashboard exactly */}
  <Route index element={<DashboardHome />} />
  
  {/* Nested routes - /dashboard/profile, /dashboard/settings */}
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

// In Dashboard component:
<Outlet /> {/* Renders the matched nested route */}`}
        </pre>
      </section>
    </div>
  );
}

// Dashboard Index/Home - shown at /dashboard
export function DashboardHome() {
  return (
    <div>
      <h2>Dashboard Overview</h2>
      <p>This is the index route, displayed when you're at exactly <code>/dashboard</code>.</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '1rem',
        marginTop: '1rem'
      }}>
        <div style={{ padding: '1rem', background: '#e3f2fd', borderRadius: '8px', textAlign: 'center' }}>
          <h3>42</h3>
          <p>Projects</p>
        </div>
        <div style={{ padding: '1rem', background: '#f3e5f5', borderRadius: '8px', textAlign: 'center' }}>
          <h3>128</h3>
          <p>Tasks</p>
        </div>
        <div style={{ padding: '1rem', background: '#e8f5e9', borderRadius: '8px', textAlign: 'center' }}>
          <h3>89%</h3>
          <p>Complete</p>
        </div>
      </div>
    </div>
  );
}
