import { createContext, useState, useContext, useEffect, type ReactNode } from 'react';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail, onAuthStateChanged, type User } from 'firebase/auth';
import { app } from '../firebase'; // Assuming you have firebase.ts exporting the app instance

interface AuthContextType {
  user: User | null;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const auth = getAuth(app);

  // ActionCodeSettings for email link
  const actionCodeSettings = {
    url: window.location.origin, // This should be your app's URL
    handleCodeInApp: true,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Handle sign-in with email link on component mount
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = localStorage.getItem('emailForSignIn');
      if (!email) {
        // User opened the link on a different device or browser
        // You might want to prompt them for their email here
        email = window.prompt('Please provide your email for confirmation');
      }

      if (email) {
        setLoading(true);
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            setUser(result.user);
            localStorage.removeItem('emailForSignIn');
            setError(null);
          })
          .catch((err) => {
            console.error('Error signing in with email link:', err);
            setError(err.message);
            setUser(null);
          })
          .finally(() => {
            setLoading(false);
            window.history.replaceState({}, document.title, window.location.pathname); // Clean up URL
          });
      } else {
        setError('Email not provided for sign-in link.');
        setLoading(false);
      }
    } else {
      setLoading(false);
    }

    return () => unsubscribe();
  }, [auth]);

  const login = async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      localStorage.setItem('emailForSignIn', email);
      alert('A sign-in link has been sent to your email address. Please check your inbox.');
    } catch (err: any) {
      console.error('Error sending sign-in link:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await auth.signOut();
      setUser(null);
      localStorage.removeItem('emailForSignIn');
    } catch (err: any) {
      console.error('Error logging out:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};