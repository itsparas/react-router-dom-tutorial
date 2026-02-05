import { useState } from 'react';

/**
 * Settings Page (Lazy Loaded, Nested under Dashboard)
 * 
 * Demonstrates:
 * 1. Another LAZY LOADED component
 * 2. NESTED ROUTE: /dashboard/settings
 * 3. ROUTE-BASED CODE SPLITTING
 * 
 * This component is loaded via React.lazy() separately from Dashboard.
 */
export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: 'en'
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <h2>⚙️ Settings</h2>
      
      {/* Lazy loading indicator */}
      <div style={{ 
        padding: '1rem', 
        background: '#e3f2fd', 
        borderRadius: '8px',
        marginBottom: '1rem',
        border: '1px solid #2196f3'
      }}>
        <p>🚀 <strong>Code Splitting:</strong> This Settings component is a <em>separate chunk</em> that was lazy loaded independently!</p>
        <p>This means users only download the code they need, when they need it.</p>
      </div>

      {/* Settings Form */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '1rem',
          background: '#f5f5f5',
          borderRadius: '8px'
        }}>
          <span>📧 Email Notifications</span>
          <input 
            type="checkbox" 
            checked={settings.notifications}
            onChange={() => handleToggle('notifications')}
            style={{ width: '20px', height: '20px' }}
          />
        </label>

        <label style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '1rem',
          background: '#f5f5f5',
          borderRadius: '8px'
        }}>
          <span>🌙 Dark Mode</span>
          <input 
            type="checkbox" 
            checked={settings.darkMode}
            onChange={() => handleToggle('darkMode')}
            style={{ width: '20px', height: '20px' }}
          />
        </label>

        <label style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '1rem',
          background: '#f5f5f5',
          borderRadius: '8px'
        }}>
          <span>🌐 Language</span>
          <select 
            value={settings.language}
            onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
            style={{ padding: '0.5rem' }}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>
      </div>

      {/* Code Splitting Example */}
      <section style={{ marginTop: '2rem' }}>
        <h3>📝 Lazy Loading Setup:</h3>
        <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '4px', overflow: 'auto', fontSize: '0.85rem' }}>
{`// Lazy load components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

// Wrap routes with Suspense for loading state
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />}>
      <Route path="settings" element={<Settings />} />
    </Route>
  </Routes>
</Suspense>`}
        </pre>
      </section>
    </div>
  );
}
