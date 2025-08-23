// Public routes - accessible to all users
const publicRoutes = [
  {
    path: '/',
    element: 'Home',
    exact: true,
    isPublic: true
  },
  {
    path: '/test',
    element: 'TestRoute',
    exact: true,
    isPublic: true
  },
  {
    path: '/login',
    element: 'AuthPage',
    props: { isSignUp: false },
    exact: true,
    isPublic: true
  },
  {
    path: '/signup',
    element: 'AuthPage',
    props: { isSignUp: true },
    exact: true,
    isPublic: true
  }
];

// Protected routes - require authentication
const protectedRoutes = [
  {
    path: '/dashboard',
    element: 'Dashboard',
    exact: true
  },
  {
    path: '/appointments',
    element: 'Appointments',
    exact: true
  },
  {
    path: '/health-tools',
    element: 'HealthTools',
    exact: true
  },
  {
    path: '/connect',
    element: 'Connect',
    exact: true
  },
  {
    path: '/profile',
    element: 'Profile',
    exact: true
  },
  {
    path: '/settings',
    element: 'Settings',
    exact: true
  }
];

// Export routes
export { publicRoutes, protectedRoutes };
