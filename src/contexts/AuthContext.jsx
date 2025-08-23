import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  signOut, 
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile
} from 'firebase/auth';
import { auth, googleProvider, analytics } from '../firebase/config';
import { logEvent } from 'firebase/analytics';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up with email and password
  const signup = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Update user profile with display name
      await updateProfile(userCredential.user, { displayName });
      // Send email verification
      await sendEmailVerification(userCredential.user);
      // Log signup event
      logEvent(analytics, 'sign_up', { method: 'email' });
      toast.success('Account created successfully! Please check your email to verify your account.');
      return userCredential;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Login with email and password
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Log login event
      logEvent(analytics, 'login', { method: 'email' });
      toast.success('Successfully logged in!');
      return userCredential;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Login with Google using Firebase's popup method
  const signInWithGoogle = async () => {
    try {
      console.log('Starting Google Sign-In...');
      const result = await signInWithPopup(auth, googleProvider).catch(error => {
        console.error('Google Sign-In Error:', error);
        throw error;
      });
      
      // Log successful login
      logEvent(analytics, 'login', { method: 'google' });
      console.log('Google Sign-In successful');
      
      // Show success message
      toast.success('Successfully logged in with Google!');
      
      return result;
    } catch (error) {
      console.error('Error in signInWithGoogle:', error);
      toast.error(error.message || 'Failed to sign in with Google');
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      // Log logout event
      logEvent(analytics, 'logout');
      await signOut(auth);
      toast.success('Successfully logged out');
    } catch (error) {
      toast.error('Failed to log out. Please try again.');
      console.error('Logout error:', error);
    }
  };

  // Set up auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    loading,
    login,
    signup,
    logout,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
