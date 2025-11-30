import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'wouter';
import { getUniversityFromEmail } from '@/lib/uscData';
import { hexToHsl } from '@/lib/utils';

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

  const applyUniversityTheme = (email: string) => {
    const university = getUniversityFromEmail(email);
    const root = document.documentElement;

    if (university) {
      // Apply university colors
      const primaryHsl = hexToHsl(university.colors.primary);
      const secondaryHsl = hexToHsl(university.colors.secondary);
      
      root.style.setProperty('--primary', primaryHsl);
      // For primary foreground, we might want to keep it white or adjust based on contrast
      // But for now, let's keep it simple or assume white works for dark uni colors
      root.style.setProperty('--primary-foreground', '0 0% 100%'); 
      
      // We can also set secondary if we want, though secondary is often used for backgrounds
      // root.style.setProperty('--secondary', secondaryHsl);
    } else {
      // Reset to default Hey Maple colors (Blue)
      // --primary: 221 83% 53%;
      root.style.removeProperty('--primary');
      root.style.removeProperty('--primary-foreground');
    }
  };

  useEffect(() => {
    // Check local storage on mount
    const storedUser = localStorage.getItem('heymaple_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        applyUniversityTheme(parsedUser.email);
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
    applyUniversityTheme(email);
    setLocation('/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('heymaple_user');
    // Reset theme
    const root = document.documentElement;
    root.style.removeProperty('--primary');
    root.style.removeProperty('--primary-foreground');
    setLocation('/');
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
      applyUniversityTheme(email);
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
