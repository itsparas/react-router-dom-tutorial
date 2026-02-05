import { useState } from 'react';
import { AuthContext } from './AuthContextDef';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    // Simulate login - in real app, this would call an API
    setUser({ username, role: 'user' });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
