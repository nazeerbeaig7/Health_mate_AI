import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import { publicRoutes, protectedRoutes } from '../config/routes';

// Component map with lazy-loaded components
const componentMap = {
  // Public pages
  Home: React.lazy(() => import('../pages/Home')),
  AuthPage: React.lazy(() => import('../pages/AuthPage')),
  TestRoute: React.lazy(() => import('../pages/TestRoute')),
  
  // Protected pages
  Dashboard: React.lazy(() => import('../pages/Dashboard')),
  Appointments: React.lazy(() => import('../pages/Appointments')),
  HealthTools: React.lazy(() => import('../pages/HealthTools')),
  Connect: React.lazy(() => import('../pages/Connect')),
  Profile: React.lazy(() => import('../pages/Profile')),
  Settings: React.lazy(() => import('../pages/Settings')),
};

const AppRouter = () => {
  const { currentUser } = useAuth();

  // Render route element with props
  const renderElement = (route) => {
    const Element = componentMap[route.element];
    if (!Element) {
      console.error(`Component ${route.element} not found in componentMap`);
      return <div>Error: Component not found</div>;
    }
    
    if (route.isPublic) {
      // Only redirect from auth pages if already logged in
      if (currentUser && (route.path === '/login' || route.path === '/signup')) {
        return <Navigate to="/dashboard" replace />;
      }
      return <Element {...(route.props || {})} />;
    }
    
    // Protected route
    return (
      <ProtectedRoute>
        <Element {...(route.props || {})} />
      </ProtectedRoute>
    );
  };

  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {renderElement(route)}
            </Suspense>
          }
          exact={route.exact}
        />
      ))}
      
      {/* Protected Routes */}
      {protectedRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {renderElement(route)}
            </Suspense>
          }
          exact={route.exact}
        />
      ))}
      
      {/* 404 - Not Found */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
