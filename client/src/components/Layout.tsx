import { Link, useLocation } from "wouter";
import mapleLeafLogo from "@/assets/heymaple-logo.png";
import { cn } from "@/lib/utils";
import { Menu, X, MessageSquare, Bell } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/assessment", label: "Assessment" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/profile", label: "My Profile" },
  ];

  // Show connection nav only on protected pages
  const isProtected = ['/dashboard', '/messages', '/notifications', '/profile'].includes(location);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 transition-transform group-hover:scale-105">
              <img src={mapleLeafLogo} alt="Hey Maple Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground tracking-tight">
              Hey Maple
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {isProtected ? (
              <>
                <Link href="/dashboard" className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/dashboard" ? "text-primary" : "text-muted-foreground")}>
                  Find Teammates
                </Link>
                <Link href="/messages" className="text-muted-foreground hover:text-foreground relative">
                  <MessageSquare size={20} />
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                </Link>
                <Link href="/notifications" className="text-muted-foreground hover:text-foreground relative">
                  <Bell size={20} />
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
                </Link>
                <div className="h-6 w-px bg-border mx-2" />
                <Link href="/profile" className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/profile" ? "text-primary" : "text-muted-foreground")}>
                  Profile
                </Link>
              </>
            ) : (
              <>
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      location === item.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="h-6 w-px bg-border mx-2" />
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Sign In
                </button>
                <Link href="/assessment">
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-primary/90 transition-colors hover-elevate">
                    Get Started
                  </button>
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white p-4 space-y-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-base font-medium transition-colors",
                  location === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center md:text-left grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
               <img src={mapleLeafLogo} alt="Hey Maple Logo" className="w-6 h-6 object-contain opacity-80" />
               <span className="font-heading font-bold text-lg text-foreground/80">Hey Maple</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building networks, growing futures.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">How it Works</a></li>
              <li><a href="#" className="hover:text-primary">Assessment</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Team Guides</a></li>
              <li><a href="#" className="hover:text-primary">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 Hey Maple. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
