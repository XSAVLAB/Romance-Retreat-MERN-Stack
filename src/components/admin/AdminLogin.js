import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import './AdminLogin.css';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ identifier: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { loginAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!credentials.identifier || !credentials.password) {
      setError('Please enter user ID and password');
      setIsLoading(false);
      return;
    }

    const result = await loginAdmin(credentials.identifier, credentials.password);
    if (!result.success) {
      setError(result.message || 'Login failed');
    } else {
      navigate('/admin');
    }
    setIsLoading(false);
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
            <label htmlFor="identifier">Admin User ID</label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              value={credentials.identifier}
              onChange={handleInputChange}
              placeholder="Enter admin user ID"
              disabled={isLoading}
              autoComplete="username"
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
              autoComplete="current-password"
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