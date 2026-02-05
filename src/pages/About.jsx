import { useNavigate } from 'react-router-dom';

/**
 * About Page
 * 
 * Demonstrates PROGRAMMATIC NAVIGATION with useNavigate hook.
 */
export default function About() {
  const navigate = useNavigate();

  // Different ways to use navigate()
  const goToHome = () => navigate('/');
  const goToProducts = () => navigate('/products');
  const goBack = () => navigate(-1); // Go back in history
  const goForward = () => navigate(1); // Go forward in history
  const goWithState = () => navigate('/login', { state: { message: 'Hello from About!' } });
  const replaceHistory = () => navigate('/products', { replace: true }); // Replace current entry

  return (
    <div>
      <h1>ℹ️ About Page</h1>
      <p>This page demonstrates <strong>Programmatic Navigation</strong> using the <code>useNavigate</code> hook.</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>useNavigate() Examples:</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <button onClick={goToHome}>
            navigate('/') - Go to Home
          </button>
          
          <button onClick={goToProducts}>
            navigate('/products') - Go to Products
          </button>
          
          <button onClick={goBack}>
            navigate(-1) - Go Back
          </button>
          
          <button onClick={goForward}>
            navigate(1) - Go Forward
          </button>
          
          <button onClick={goWithState}>
            navigate('/login', {'{ state }'}') - Navigate with State
          </button>
          
          <button onClick={replaceHistory}>
            navigate('/products', {'{ replace: true }'}) - Replace History Entry
          </button>
        </div>
      </section>
      
      <section style={{ marginTop: '2rem', padding: '1rem', background: '#e8f4fd', borderRadius: '8px' }}>
        <h3>Code Example:</h3>
        <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  // Navigate to a path
  navigate('/products');
  
  // Navigate with state
  navigate('/login', { state: { from: '/protected' } });
  
  // Navigate back in history
  navigate(-1);
  
  // Replace current history entry
  navigate('/home', { replace: true });
}`}
        </pre>
      </section>
    </div>
  );
}
