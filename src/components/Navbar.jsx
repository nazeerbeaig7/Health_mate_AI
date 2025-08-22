import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, Menu, X, User } from 'lucide-react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { id: 'health', label: 'Health Tools', path: '/health-tools' },
    { id: 'appointments', label: 'Appointments', path: '/appointments' },
    { id: 'connect', label: 'Connect', path: '/connect' },
    { id: 'settings', label: 'Settings', path: '/settings' },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsProfileMenuOpen(false);
    navigate('/profile');
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      setIsProfileMenuOpen(!isProfileMenuOpen);
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-7 w-7 text-brand-primary" />
            <span className="text-2xl font-semibold text-brand-text">HealthMate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`text-base font-medium transition-colors ${location.pathname === item.path ? 'text-brand-primary' : 'text-brand-subtle hover:text-brand-text'}`}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Profile Icon */}
            <div className="relative">
              <button
                onClick={handleProfileClick}
                className="bg-white border-2 border-gray-300 rounded-full h-10 w-10 flex items-center justify-center text-brand-subtle hover:border-brand-primary hover:text-brand-primary transition-colors">
                <User className="h-5 w-5" />
              </button>
              {isProfileMenuOpen && !isLoggedIn && (
                <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-lg rounded-lg shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                  <button onClick={handleLogin} className="block w-full text-left px-4 py-2 text-sm text-brand-text hover:bg-gray-100">
                    Login
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-brand-text hover:bg-gray-100">
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {/* Hamburger menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-brand-subtle hover:text-brand-primary p-2 transition-colors">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-gray-200/80 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-center py-2 rounded-md text-base font-medium transition-colors ${location.pathname === item.path ? 'text-brand-primary bg-blue-50' : 'text-brand-subtle hover:text-brand-text hover:bg-gray-50'}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;