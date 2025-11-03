import React, { useState } from 'react';
import { usePricing } from '../contexts/PricingContext';
import Navbar from './Navbar';
import Footer from './Footer';
import './Admin.css';

const Admin = () => {
  const { prices, updatePrice, resetPrices, serviceKeys } = usePricing();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [editingPrices, setEditingPrices] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = 'romance2024';

  const serviceLabels = {
    'romanticDinners': 'Romantic Dinners',
    'weddingProposals': 'Wedding Proposals',
    'valentinesDinners': "Valentine's Dinners",
    'birthdayCelebrations': 'Birthday Celebrations',
    'anniversaryCelebrations': 'Anniversary Celebrations',
    'dinnerDate': 'Dinner Date Experiences',
    'yachtDinner': 'Yacht Dinner',
    'coupleMassage': 'Couple Massage & Spa Rituals',
    'customizedMoments': 'Customised Romance Moments'
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setEditingPrices(prices);
    } else {
      alert('Invalid password!');
    }
  };

  const handlePriceChange = (serviceKey, value) => {
    // Remove any non-numeric characters except commas
    const cleanValue = value.replace(/[^\d,]/g, '');
    setEditingPrices(prev => ({
      ...prev,
      [serviceKey]: cleanValue
    }));
  };

  const handleSave = () => {
    Object.keys(editingPrices).forEach(serviceKey => {
      updatePrice(serviceKey, editingPrices[serviceKey]);
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all prices to default values?')) {
      resetPrices();
      setEditingPrices(prices);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setEditingPrices({});
  };

  if (!isAuthenticated) {
    return (
      <div className="admin">
        <Navbar />
        <div className="admin-login">
          <div className="login-card">
            <h2>Admin Access</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                />
              </div>
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="admin">
      <Navbar />
      <div className="admin-container">
        <div className="admin-header">
          <h1>Pricing Management</h1>
          <div className="admin-actions">
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>

        {showSuccess && (
          <div className="success-message">
            ✅ Prices updated successfully!
          </div>
        )}

        <div className="pricing-grid">
          {serviceKeys.map(serviceKey => (
            <div key={serviceKey} className="price-card">
              <h3>{serviceLabels[serviceKey]}</h3>
              <div className="price-input-group">
                <label>Starting From:</label>
                <div className="price-input-wrapper">
                  <span className="currency">₹</span>
                  <input
                    type="text"
                    value={editingPrices[serviceKey] || ''}
                    onChange={(e) => handlePriceChange(serviceKey, e.target.value)}
                    placeholder="Enter price"
                    className="price-input"
                  />
                </div>
                <div className="current-price">
                  Current: ₹{prices[serviceKey]}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="admin-controls">
          <button onClick={handleSave} className="save-btn">
            Save All Changes
          </button>
          <button onClick={handleReset} className="reset-btn">
            Reset to Defaults
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;