import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/Layout";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/components/ProtectedRoute";

import Home from "@/pages/Home";
import RoleSelection from "@/pages/RoleSelection";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Assessment from "@/pages/Assessment";
import Results from "@/pages/Results";
import TermsOfService from "@/pages/TermsOfService";
import Dashboard from "@/pages/Dashboard";
import Messages from "@/pages/Messages";
import Notifications from "@/pages/Notifications";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/not-found";

import CreateProject from "@/pages/CreateProject";
import ProjectMatches from "@/pages/ProjectMatches";
import HelperSetup from "@/pages/HelperSetup";
import ProjectFeed from "@/pages/ProjectFeed";
import Matches from "@/pages/Matches";

function Router() {
  return (
    <Layout>
      <Switch>
        {/* Public Routes */}
        <Route path="/" component={Home} />
        <Route path="/role-selection" component={RoleSelection} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/assessment" component={Assessment} />
        <Route path="/results" component={Results} />
        <Route path="/terms-of-service" component={TermsOfService} />
        
        {/* Protected Routes - Require Authentication */}
        <Route path="/dashboard">
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        </Route>
        <Route path="/messages">
          <ProtectedRoute><Messages /></ProtectedRoute>
        </Route>
        <Route path="/notifications">
          <ProtectedRoute><Notifications /></ProtectedRoute>
        </Route>
        <Route path="/profile">
          <ProtectedRoute><Profile /></ProtectedRoute>
        </Route>
        <Route path="/create-project">
          <ProtectedRoute><CreateProject /></ProtectedRoute>
        </Route>
        <Route path="/project-matches">
          <ProtectedRoute><ProjectMatches /></ProtectedRoute>
        </Route>
        <Route path="/helper-setup">
          <ProtectedRoute><HelperSetup /></ProtectedRoute>
        </Route>
        <Route path="/project-feed">
          <ProtectedRoute><ProjectFeed /></ProtectedRoute>
        </Route>
        <Route path="/matches">
          <ProtectedRoute><Matches /></ProtectedRoute>
        </Route>
        
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
