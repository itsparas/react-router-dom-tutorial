import { Link, useLocation } from 'react-router-dom';

/**
 * NotFound (404) Page
 * 
 * Demonstrates 404 & FALLBACK ROUTES.
 * 
 * This route is matched using path="*" which catches all unmatched URLs.
 * It should be placed last in your route configuration.
 */
export default function NotFound() {
  const location = useLocation();

  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1 style={{ fontSize: '6rem', margin: '0', color: '#dc3545' }}>404</h1>
      <h2>Page Not Found</h2>
      
      <p>
        The page <code>{location.pathname}</code> doesn't exist.
      </p>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        background: '#f8f9fa', 
        borderRadius: '8px',
        display: 'inline-block',
        textAlign: 'left'
      }}>
        <h3>📝 How to set up a 404 route:</h3>
        <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '4px' }}>
{`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  {/* ... other routes ... */}
  
  {/* Catch-all route - matches anything not matched above */}
  <Route path="*" element={<NotFound />} />
</Routes>`}
        </pre>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
          The <code>*</code> path acts as a wildcard that matches any URL 
          that wasn't matched by the routes defined above it.
        </p>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/">
          <button style={{ 
            padding: '0.75rem 1.5rem', 
            background: '#646cff', 
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Go Home
          </button>
        </Link>
        <button 
          onClick={() => window.history.back()}
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: '#6c757d', 
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Go Back
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h4>Try these links to test 404:</h4>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <li><Link to="/random-page">random-page</Link></li>
          <li><Link to="/foo/bar/baz">/foo/bar/baz</Link></li>
          <li><Link to="/test123">/test123</Link></li>
        </ul>
      </div>
    </div>
  );
}
