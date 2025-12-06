import React, { useState, useEffect } from 'react';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial secure connection check
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-blue-500 font-mono">
        <div className="mb-4 relative w-16 h-16">
          <div className="absolute inset-0 border-t-2 border-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-2 border-cyan-400 rounded-full animate-spin reverse"></div>
        </div>
        <p className="animate-pulse">ESTABLISHING SECURE HANDSHAKE...</p>
        <p className="text-xs text-slate-600 mt-2">NEXGEN_SECURE_PROTO_V4.2</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-slate-200 antialiased selection:bg-blue-500/30">
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}