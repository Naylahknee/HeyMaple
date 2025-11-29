import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/Layout";

import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Assessment from "@/pages/Assessment";
import Results from "@/pages/Results";
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
        <Route path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/assessment" component={Assessment} />
        <Route path="/results" component={Results} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/messages" component={Messages} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/profile" component={Profile} />
        
        {/* New Flows */}
        <Route path="/create-project" component={CreateProject} />
        <Route path="/project-matches" component={ProjectMatches} />
        <Route path="/helper-setup" component={HelperSetup} />
        <Route path="/project-feed" component={ProjectFeed} />
        <Route path="/matches" component={Matches} />
        
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
