import React, { useState } from 'react';
import './LoginDialog.css'; // We'll create this CSS file next

interface LoginDialogProps {
  onLogin: (email: string) => void;
  errorMessage: string | null;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ onLogin, errorMessage }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email);
  };

  return (
    <div className="login-dialog-overlay">
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
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginDialog;