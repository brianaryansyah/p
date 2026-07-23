import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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
      setUser({ username: 'brian', role: 'admin', name: 'Brian Aryansyah' });
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    const result = await apiService.login(username, password);
    if (result.success) {
      setIsAuthenticated(true);
      setUser(result.user);
    }
    return result;
  };

  const logout = async () => {
    await apiService.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
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
