import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'wouter';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, name?: string) => void;
  logout: () => void;
  loginWithProvider: (provider: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [_, setLocation] = useLocation();

  useEffect(() => {
    // Check local storage on mount
    const storedUser = localStorage.getItem('heymaple_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Failed to parse user from local storage');
        localStorage.removeItem('heymaple_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, name: string = 'User') => {
    const newUser = {
      id: '1',
      name,
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
    };
    setUser(newUser);
    localStorage.setItem('heymaple_user', JSON.stringify(newUser));
    setLocation('/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('heymaple_user');
    setLocation('/');
  };

  const loginWithProvider = (provider: string) => {
    // Mock social login
    setIsLoading(true);
    setTimeout(() => {
      const newUser = {
        id: '2',
        name: `Mock ${provider} User`,
        email: `user@${provider.toLowerCase()}.com`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${provider}`
      };
      setUser(newUser);
      localStorage.setItem('heymaple_user', JSON.stringify(newUser));
      setIsLoading(false);
      setLocation('/dashboard');
    }, 1000);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, loginWithProvider }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
