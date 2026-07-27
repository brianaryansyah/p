import { createContext, useContext, useState, useEffect, useMemo, useCallback, ReactNode } from 'react';
import { apiService } from '../services/api';

interface UserType {
  username: string;
  role: string;
  name: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserType | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; token: string; user: UserType }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const isAuth = apiService.isAuthenticated();
    if (isAuth) {
      setIsAuthenticated(true);
      setUser({ username: 'admin', role: 'admin', name: 'Brian Aryansyah' });
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const result = await apiService.login(username, password);
    if (result.success) {
      setIsAuthenticated(true);
      setUser(result.user);
    }
    return result;
  }, []);

  const logout = useCallback(async () => {
    await apiService.logout();
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  const value = useMemo(() => ({
    isAuthenticated,
    user,
    login,
    logout,
    loading
  }), [isAuthenticated, user, login, logout, loading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
