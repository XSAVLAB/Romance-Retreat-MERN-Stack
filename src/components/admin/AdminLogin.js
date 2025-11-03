import React, { useState } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import './AdminLogin.css';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { loginAdmin } = useAdmin();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (!credentials.username || !credentials.password) {
      setError('Please enter both username and password');
      setIsLoading(false);
      return;
    }

    // Simulate a small delay for better UX
    setTimeout(() => {
      const result = loginAdmin(credentials.username, credentials.password);
      if (!result.success) {
        setError(result.message || 'Login failed');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <h2>Admin Login</h2>
          <p>Romance Retreat Management Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form">
          {error && (
            <div className="admin-error-message">
              {error}
            </div>
          )}

          <div className="admin-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              placeholder="Enter admin username"
              disabled={isLoading}
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter admin password"
              disabled={isLoading}
            />
          </div>

          <button 
            type="submit" 
            className="admin-login-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Logging in...
              </>
            ) : (
              'Login to Admin Panel'
            )}
          </button>
        </form>

        <div className="admin-login-footer">
          <p>Authorized access only</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;