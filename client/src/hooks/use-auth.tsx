import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'wouter';
import { applyUniversityTheme, resetUniversityTheme } from '@/lib/theme';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  university?: string;
  school?: string;
  major?: string;
  degree?: string;
  graduationYear?: string;
  accountType?: 'Student' | 'Faculty' | 'Alumni' | 'BetaTester';
  skills?: string[];
  projectType?: string;
  goals?: string[];
  referralPoints?: number;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, name?: string, additionalData?: Partial<User>) => void;
  logout: () => void;
  loginWithProvider: (provider: string) => void;
  updateUserRole: (newRole: 'Student' | 'Faculty' | 'Alumni' | 'BetaTester') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Check local storage on mount
    const storedUser = localStorage.getItem('heymaple_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (e) {
        console.error('Failed to parse user from local storage');
        localStorage.removeItem('heymaple_user');
      }
    }
    setIsLoading(false);
  }, []);

  // Apply the logged-in user's school palette. While logged out (e.g. during the
  // signup flow), the Register page manages theming itself, so we don't reset here
  // and clobber it — logout() handles resetting the palette explicitly.
  useEffect(() => {
    if (user) {
      applyUniversityTheme(user.email);
    }
  }, [user]);

  const login = (email: string, name: string = 'User', additionalData: Partial<User> = {}) => {
    const newUser = {
      id: '1',
      name,
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
      goals: [],
      referralPoints: 0,
      ...additionalData
    };
    setUser(newUser);
    localStorage.setItem('heymaple_user', JSON.stringify(newUser));
    // Theme will be applied by effect when location changes
    setLocation('/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('heymaple_user');
    resetUniversityTheme();
    setLocation('/');
  };

  const updateUserRole = (newRole: 'Student' | 'Faculty' | 'Alumni' | 'BetaTester') => {
    if (user) {
      const updatedUser = { ...user, accountType: newRole };
      setUser(updatedUser);
      localStorage.setItem('heymaple_user', JSON.stringify(updatedUser));
    }
  };

  const loginWithProvider = (provider: string) => {
    // Mock social login
    setIsLoading(true);
    setTimeout(() => {
      // Mock email based on provider for demo, or just a generic one
      // Let's use a USC email for Google to demo the color change if they pick Google
      const email = provider === 'Google' ? 'demo@usc.edu' : `user@${provider.toLowerCase()}.com`;
      
      const newUser = {
        id: '2',
        name: `Mock ${provider} User`,
        email: email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${provider}`
      };
      setUser(newUser);
      localStorage.setItem('heymaple_user', JSON.stringify(newUser));
      // Theme will be applied by effect
      setIsLoading(false);
      setLocation('/dashboard');
    }, 1000);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, loginWithProvider, updateUserRole }}>
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
