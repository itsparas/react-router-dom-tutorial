import { Link } from 'react-router-dom';

/**
 * Home Page
 * 
 * Demonstrates basic NAVIGATION with <Link> component.
 * <Link> prevents full page reload and enables client-side routing.
 */
export default function Home() {
  return (
    <div>
      <h1>🏠 Home Page</h1>
      <p>Welcome to the React Router v6 Demo Application!</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Topics Covered in This Demo:</h2>
        <ul style={{ lineHeight: '2' }}>
          <li>
            <strong>React Router v6 Fundamentals:</strong> 
            <code>BrowserRouter</code>, <code>Routes</code>, <code>Route</code>
          </li>
          <li>
            <strong>Nested Routes & Layout Routes:</strong> 
            See <Link to="/dashboard">Dashboard</Link> with nested routes
          </li>
          <li>
            <strong>Dynamic Routes & URL Params:</strong> 
            See <Link to="/products/1">Product Detail</Link> page
          </li>
          <li>
            <strong>Search Params as State:</strong> 
            Try filtering on <Link to="/products">Products</Link> page
          </li>
          <li>
            <strong>Programmatic Navigation:</strong> 
            See <Link to="/login">Login</Link> redirect behavior
          </li>
          <li>
            <strong>404 & Fallback Routes:</strong> 
            Try visiting <Link to="/non-existent-page">/non-existent-page</Link>
          </li>
          <li>
            <strong>Protected Routes:</strong> 
            Try accessing <Link to="/dashboard">Dashboard</Link> without login
          </li>
          <li>
            <strong>Lazy Loading & Code Splitting:</strong> 
            Dashboard and Settings pages are lazy loaded
          </li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem', padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Quick Navigation:</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/products?category=electronics">Electronics</Link>
          <Link to="/products/42">Product #42</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </section>
    </div>
  );
}
