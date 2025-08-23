import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzkyGhLz2ZmaT7TocUrmJfcXJs5iyEjhw",
  authDomain: "healthmate-db99e.firebaseapp.com",
  projectId: "healthmate-db99e",
  storageBucket: "healthmate-db99e.firebasestorage.app",
  messagingSenderId: "331642496303",
  appId: "1:331642496303:web:42e67b00db3c4b2fbb2dda",
  measurementId: "G-SMKJHZZYB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Configure Google Auth Provider
const googleProvider = new GoogleAuthProvider();
// Add additional scopes if needed
googleProvider.addScope('profile');
googleProvider.addScope('email');
// Enable account selection
// googleProvider.setCustomParameters({
//   prompt: 'select_account'
// });

// Enable email/password authentication
// You can add more providers as needed

// Export the Firebase services
export { auth, googleProvider, analytics };
export default app;
