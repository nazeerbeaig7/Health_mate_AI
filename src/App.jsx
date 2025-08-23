import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useAuth } from './contexts/AuthContext';
import AppRouter from './routes/AppRouter';

// Simple loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <LoadingFallback />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed navbar */}
          <Suspense fallback={<LoadingFallback />}>
            <AppRouter />
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;