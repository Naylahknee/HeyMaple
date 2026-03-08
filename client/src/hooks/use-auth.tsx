import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'wouter';
import { getUniversityFromEmail } from '@/lib/uscData';
import { hexToHsl } from '@/lib/utils';

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

  const applyUniversityTheme = (email: string) => {
    const university = getUniversityFromEmail(email);
    const root = document.documentElement;

    if (university) {
      // Apply university colors
      const primaryHsl = hexToHsl(university.colors.primary);
      
      root.style.setProperty('--primary', primaryHsl);
      // For primary foreground, we might want to keep it white or adjust based on contrast
      // But for now, let's keep it simple or assume white works for dark uni colors
      root.style.setProperty('--primary-foreground', '0 0% 100%'); 
    } else {
      // Reset to default Hey Maple colors (Blue)
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
      } catch (e) {
        console.error('Failed to parse user from local storage');
        localStorage.removeItem('heymaple_user');
      }
    }
    setIsLoading(false);
  }, []);

  // Theme switcher effect based on location and user
  useEffect(() => {
    if (user && location !== '/' && location !== '/login' && location !== '/register') {
      applyUniversityTheme(user.email);
    } else {
      // Reset theme on public pages or if not logged in
      const root = document.documentElement;
      root.style.removeProperty('--primary');
      root.style.removeProperty('--primary-foreground');
    }
  }, [user, location]);

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
    // Theme will be reset by effect
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
