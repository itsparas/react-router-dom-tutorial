import { useAuth } from '../context/useAuth';

/**
 * Profile Page (Nested under Dashboard)
 * 
 * This demonstrates a nested route: /dashboard/profile
 */
export default function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <h2>👤 User Profile</h2>
      <p>This is a nested route rendered inside the Dashboard layout.</p>
      
      <div style={{ marginTop: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd', fontWeight: 'bold' }}>Username</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>{user?.username}</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd', fontWeight: 'bold' }}>Role</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>{user?.role}</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd', fontWeight: 'bold' }}>Current Route</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}><code>/dashboard/profile</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ 
        marginTop: '1.5rem', 
        padding: '1rem', 
        background: '#fff3cd', 
        borderRadius: '8px' 
      }}>
        <p>💡 <strong>Note:</strong> The Dashboard layout (with its navigation) remains visible because Profile is rendered inside Dashboard's <code>&lt;Outlet /&gt;</code>.</p>
      </div>
    </div>
  );
}
