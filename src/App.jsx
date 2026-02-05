import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Regular imports for frequently accessed pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

/**
 * LAZY LOADING & CODE SPLITTING
 * 
 * React.lazy() enables dynamic imports, splitting these components 
 * into separate JavaScript chunks. They're only loaded when needed.
 * 
 * Benefits:
 * - Faster initial page load (smaller bundle)
 * - Users only download code they actually use
 * - Better performance on slow connections
 */
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

// Also import DashboardHome from Dashboard file
const DashboardHome = lazy(() => 
  import('./pages/Dashboard').then(module => ({ default: module.DashboardHome }))
);

/**
 * Loading Component
 * Shown while lazy-loaded components are being fetched
 */
function LoadingSpinner() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '200px',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #646cff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <p>Loading...</p>
    </div>
  );
}

/**
 * Main App Component
 * 
 * Demonstrates REACT ROUTER V6 FUNDAMENTALS:
 * 
 * 1. Routes & Route - Define route configuration
 * 2. Nested Routes - Routes inside routes (Dashboard)
 * 3. Layout Routes - Shared UI via Outlet
 * 4. Dynamic Routes - URL params (:productId)
 * 5. Index Routes - Default nested route
 * 6. Catch-all Routes - 404 handling (*)
 * 7. Protected Routes - Auth guards
 * 8. Lazy Loading - Code splitting with React.lazy()
 */
function App() {
  return (
    // Suspense provides fallback UI while lazy components load
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Layout Route - wraps all pages with common UI */}
        <Route path="/" element={<Layout />}>
          
          {/* Index Route - matches "/" exactly */}
          <Route index element={<Home />} />
          
          {/* Static Routes */}
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          
          {/* Products Routes */}
          <Route path="products" element={<Products />} />
          
          {/* Dynamic Route with URL Param */}
          <Route path="products/:productId" element={<ProductDetail />} />
          
          {/* Protected Nested Routes */}
          <Route 
            path="dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            {/* Index route for dashboard - shows at /dashboard */}
            <Route index element={<DashboardHome />} />
            
            {/* Nested routes - /dashboard/profile, /dashboard/settings */}
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* Catch-all 404 Route - must be last */}
          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
