import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

/**
 * Layout Component
 * 
 * Demonstrates LAYOUT ROUTES in React Router v6.
 * The <Outlet /> component renders the matched child route.
 * This allows shared UI (like navbar, footer) across multiple pages.
 */
export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main style={{ flex: 1, padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Outlet renders the matched child route component */}
        <Outlet />
      </main>
      
      <footer style={{ 
        padding: '1rem', 
        background: '#f9f9f9', 
        borderTop: '1px solid #ddd',
        textAlign: 'center'
      }}>
        <p>React Router v6 Demo - © 2024</p>
      </footer>
    </div>
  );
}
