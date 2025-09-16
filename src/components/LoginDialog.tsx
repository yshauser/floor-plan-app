import React, { useState } from 'react';
import './LoginDialog.css';
import { useAuth } from '../contexts/AuthContext';
import packageJson from '../../package.json'; // Adjust path as needed

interface LoginDialogProps {
  // onLogin: (email: string) => void; // No longer needed as login is handled by AuthContext
  // errorMessage: string | null; // No longer needed as error is handled by AuthContext
}

const LoginDialog: React.FC<LoginDialogProps> = () => {
  const [email, setEmail] = useState('');
  const [localError, setLocalError] = useState<string | null>(null); // New state for local validation errors
  const { login, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null); // Clear previous local errors

    if (!email.endsWith('@rbbn.com')) {
      setLocalError('App is available only for Ribbon employees');
      return;
    }

    await login(email);
  };

  return (
    <div className="login-dialog-overlay">
      <header className="header">
        <h1>Welcome to the Seat Finder App</h1>
      </header>

      <div className="login-dialog">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          {(error || localError) && <p className="error-message">{error || localError}</p>}
          {loading && <p className="loading-message">Sending sign-in link...</p>}
          <button type="submit" disabled={loading}>
            Send Sign-in Link
          </button>
          <p className="info-message">
            A sign-in link will be sent to your email address. Click the link to log in.
          </p>
        </form>
        <div className="version-info">Ver: {packageJson.version}</div>
      </div>
    </div>
  );
};

export default LoginDialog;