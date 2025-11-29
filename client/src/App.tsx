import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/Layout";
import { useEffect } from "react";
import { UNIVERSITIES } from "@/lib/uscData";

import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Assessment from "@/pages/Assessment";
import Results from "@/pages/Results";
import Dashboard from "@/pages/Dashboard";
import Messages from "@/pages/Messages";
import Notifications from "@/pages/Notifications";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/not-found";

// Helper to set university theme
function useUniversityTheme() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Determine university based on route/state
    // For demo, we'll default to standard theme on landing, 
    // but simulate a "logged in" user's university on dashboard/profile
    
    let universityId = null;
    
    // Simulate determining university from "logged in user" (mock)
    // In a real app, this comes from Auth Context
    if (['/dashboard', '/profile', '/messages', '/notifications'].includes(location)) {
      // Default to USC for demo purposes if "logged in"
      universityId = "usc";
      // You could toggle this to "ucla" to test the other theme
    }
    
    if (universityId) {
      const uni = UNIVERSITIES.find(u => u.id === universityId);
      if (uni) {
        const root = document.documentElement;
        
        // Convert hex to HSL-like values if needed, or just set hex if Tailwind allows
        // Tailwind v4 might handle hex in vars if configured, but our index.css expects HSL values for hsl(var(...))
        // We need to convert hex to HSL manually or update index.css to accept hex.
        // Our index.css uses `hsl(var(--primary))` so we need HSL values.
        
        // Quick hex to hsl conversion or hardcoded mapping for this demo
        if (uni.id === 'usc') {
           // Cardinal Red: 348 100% 40% (approx for #990000) - let's match what was in index.css
           // Previous primary was 10 75% 57% (Orange-Red). USC Cardinal is darker.
           // USC Gold: 45 100% 55%
           root.style.setProperty('--primary', '350 100% 40%'); // Deep Red
           root.style.setProperty('--primary-foreground', '0 0% 100%');
           root.style.setProperty('--secondary', '45 100% 55%'); // Gold
           root.style.setProperty('--secondary-foreground', '0 0% 0%');
        } else if (uni.id === 'ucla') {
           // UCLA Blue: 215 50% 37% (#2774AE approx)
           // UCLA Gold: 45 100% 59% (#FFD100 approx)
           root.style.setProperty('--primary', '215 60% 45%'); // UCLA Blue
           root.style.setProperty('--primary-foreground', '0 0% 100%');
           root.style.setProperty('--secondary', '48 100% 59%'); // UCLA Gold
           root.style.setProperty('--secondary-foreground', '0 0% 0%');
        }
      }
    } else {
      // Reset to default "Hey Maple" theme
      const root = document.documentElement;
      root.style.removeProperty('--primary');
      root.style.removeProperty('--primary-foreground');
      root.style.removeProperty('--secondary');
      root.style.removeProperty('--secondary-foreground');
    }
    
  }, [location]);
}

function Router() {
  useUniversityTheme(); // Apply branding
  
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/assessment" component={Assessment} />
        <Route path="/results" component={Results} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/messages" component={Messages} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
