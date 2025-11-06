import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import { usePricing } from '../../contexts/PricingContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { isAdminLoggedIn, logoutAdmin, adminData, updateTopBanner, updateContactInfo, addPortfolioImage, removePortfolioImage } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate('/admin-login'); // Redirect to login if not logged in
    }
  }, [isAdminLoggedIn, navigate]);
  const { prices, updateAllPrices } = usePricing();
  const [activeTab, setActiveTab] = useState('pricing');
  const [topBannerTexts, setTopBannerTexts] = useState(adminData.topBannerTexts || ['', '', '', '']);
  const [contactInfo, setContactInfo] = useState(() => {
    const defaultContactInfo = {
      phone: '+91 7840930140',
      email: 'mail.romanceretreat@gmail.com',
      address: 'H.No: 1417, Satyabhama Nivas, Near Naga Cottage, Tembwada, Morjim, Pernem, Goa-403512',
      whatsapp: '+917840930140',
      socialMedia: {
        facebook: 'https://facebook.com/romanceretreat',
        instagram: 'https://instagram.com/romanceretreat',
        twitter: 'https://x.com/romanceretreat'
      }
    };
    
    if (adminData.contactInfo) {
      return {
        ...defaultContactInfo,
        ...adminData.contactInfo,
        socialMedia: {
          ...defaultContactInfo.socialMedia,
          ...(adminData.contactInfo.socialMedia || {})
        }
      };
    }
    
    return defaultContactInfo;
  });
  const [newImageUrl, setNewImageUrl] = useState('');
  const [saveMessage, setSaveMessage] = useState('');
  const [tempPrices, setTempPrices] = useState(prices);
  const [hasUnsavedPrices, setHasUnsavedPrices] = useState(false);

    // Handler for price input changes
    const handlePriceChange = (serviceKey, value) => {
      setTempPrices(prev => ({
        ...prev,
        [serviceKey]: value
      }));
      setHasUnsavedPrices(true);
    };

    // Handler to update all prices
    const updatePrices = async () => {
      try {
        await updateAllPrices(tempPrices);
        setSaveMessage('Prices updated successfully!');
        setHasUnsavedPrices(false);
      } catch (error) {
        setSaveMessage('Failed to update prices. Try again');
      }
      setTimeout(() => setSaveMessage(''), 3000);
    };

    // Handler for banner text changes
    const handleBannerTextChange = (index, value) => {
      setTopBannerTexts(prev => {
        const updated = [...prev];
        updated[index] = value;
        return updated;
      });
    };

  // Sync temp prices with actual prices when prices change
  React.useEffect(() => {
    setTempPrices(prices);
    setHasUnsavedPrices(false);
  }, [prices]);

  // Sync contact info with admin data when it changes
  React.useEffect(() => {
    if (adminData.contactInfo) {
      const defaultContactInfo = {
        phone: '+91 7840930140',
        email: 'mail.romanceretreat@gmail.com',
        address: 'H.No: 1417, Satyabhama Nivas, Near Naga Cottage, Tembwada, Morjim, Pernem, Goa-403512',
        whatsapp: '+917840930140',
        socialMedia: {
          facebook: 'https://facebook.com/romanceretreat',
          instagram: 'https://instagram.com/romanceretreat',
          twitter: 'https://x.com/romanceretreat'
        }
      };
      
      setContactInfo(prevContactInfo => ({
        ...defaultContactInfo,
        ...adminData.contactInfo,
        socialMedia: {
          ...defaultContactInfo.socialMedia,
          ...(adminData.contactInfo.socialMedia || {})
        }
      }));
    }
  }, [adminData.contactInfo]);

  const handleLogout = () => {
  logoutAdmin(); // This now reloads the page and resets context
  };

  const saveTopBannerTexts = async () => {
    try {
      await updateTopBanner(topBannerTexts);
      setSaveMessage('Updated Successfully');
    } catch (error) {
      setSaveMessage('Failed to update. Try again');
    }
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      addPortfolioImage(newImageUrl.trim());
      setNewImageUrl('');
      setSaveMessage('Image added to portfolio!');
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const handleRemoveImage = (index) => {
    if (window.confirm('Are you sure you want to remove this image?')) {
      removePortfolioImage(index);
      setSaveMessage('Image removed from portfolio!');
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  // Contact info handlers
  const handleContactInfoChange = (field, value) => {
    if (field.includes('.')) {
      // Handle nested fields like socialMedia.facebook
      const [parent, child] = field.split('.');
      setContactInfo(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent] || {}),
          [child]: value
        }
      }));
    } else {
      setContactInfo(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const saveContactInfo = async () => {
    // Only send fields that are not empty to prevent overriding existing data
    const updateData = {};
    
    // Basic fields
    if (contactInfo.phone && contactInfo.phone.trim()) {
      updateData.phone = contactInfo.phone.trim();
    }
    if (contactInfo.email && contactInfo.email.trim()) {
      updateData.email = contactInfo.email.trim();
    }
    if (contactInfo.address && contactInfo.address.trim()) {
      updateData.address = contactInfo.address.trim();
    }
    if (contactInfo.whatsapp && contactInfo.whatsapp.trim()) {
      updateData.whatsapp = contactInfo.whatsapp.trim();
    }
    
    // Social media fields
    const socialMediaUpdates = {};
    if (contactInfo.socialMedia?.facebook && contactInfo.socialMedia.facebook.trim()) {
      socialMediaUpdates.facebook = contactInfo.socialMedia.facebook.trim();
    }
    if (contactInfo.socialMedia?.instagram && contactInfo.socialMedia.instagram.trim()) {
      socialMediaUpdates.instagram = contactInfo.socialMedia.instagram.trim();
    }
    if (contactInfo.socialMedia?.twitter && contactInfo.socialMedia.twitter.trim()) {
      socialMediaUpdates.twitter = contactInfo.socialMedia.twitter.trim();
    }
    
    // Only include socialMedia if there are updates
    if (Object.keys(socialMediaUpdates).length > 0) {
      updateData.socialMedia = socialMediaUpdates;
    }
    
    // Only update if there's something to update
    if (Object.keys(updateData).length > 0) {
      updateContactInfo(updateData);
      setSaveMessage('Contact information updated successfully!');
    } else {
      setSaveMessage('No changes to save.');
    }
    
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const serviceNames = {
    romanticDinners: 'Romantic Dinners',
    weddingProposals: 'Wedding Proposals',
    valentinesDinners: 'Valentine\'s Dinners',
    anniversaryCelebrations: 'Anniversary Celebrations',
    birthdayCelebrations: 'Birthday Celebrations',
    dinnerDate: 'Dinner Date Experiences',
    yachtDinner: 'Yacht Dinners',
    coupleMassage: 'Couple Massage & Spa',
    customizedMoments: 'Customized Moments'
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="admin-header-content">
          <h1>Romance Retreat Admin Panel</h1>
          <button onClick={handleLogout} className="admin-logout-btn">
            Logout
          </button>
        </div>
      </div>

      <div className="admin-content">
        <div className="admin-sidebar">
          <nav className="admin-nav">
            <button
              className={`admin-nav-btn ${activeTab === 'pricing' ? 'active' : ''}`}
              onClick={() => {
                // console.log('Pricing tab clicked');
                setActiveTab('pricing');
              }}
            >
              💰 Pricing Management
            </button>
            <button
              className={`admin-nav-btn ${activeTab === 'banners' ? 'active' : ''}`}
              onClick={() => {
                // console.log('Banners tab clicked');
                setActiveTab('banners');
              }}
            >
              📝 Promotional Banners
            </button>
            <button
              className={`admin-nav-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
              onClick={() => {
                // console.log('Portfolio tab clicked');
                setActiveTab('portfolio');
              }}
            >
              🖼️ Portfolio Images
            </button>
            <button
              className={`admin-nav-btn ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => {
                // console.log('Contact tab clicked');
                setActiveTab('contact');
              }}
            >
              📞 Contact Information
            </button>
          </nav>
        </div>

        <div className="admin-main">
          {saveMessage && (
            <div className="admin-success-message">
              {saveMessage}
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="admin-section">
              <h2>Service Pricing Management</h2>
              <p>Update pricing for all services. Click "Update Prices" to save changes to the website.</p>
              
              <div className="pricing-grid">
                {Object.entries(tempPrices).map(([serviceKey, price]) => (
                  <div key={serviceKey} className="pricing-card">
                    <h3>{serviceNames[serviceKey]}</h3>
                    <div className="price-input-group">
                      <span className="currency">₹</span>
                      <input
                        type="number"
                        value={price.replace(/,/g, '')}
                        onChange={(e) => handlePriceChange(serviceKey, e.target.value)}
                        className="price-input"
                        min="0"
                        step="1000"
                        placeholder="Enter price"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="update-section">
                <button 
                  onClick={updatePrices} 
                  className={`update-btn ${hasUnsavedPrices ? 'has-changes' : ''}`}
                  disabled={!hasUnsavedPrices}
                >
                  {hasUnsavedPrices ? 'Update Prices' : 'No Changes'}
                </button>
                {hasUnsavedPrices && (
                  <p className="unsaved-notice">You have unsaved changes</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'banners' && (
            <div className="admin-section">
              <h2>Promotional Banner Management</h2>
              <p>Create up to 4 different promotional messages that will rotate in the banner above the navigation bar. Include emojis to make them eye-catching!</p>
              
              <div className="banner-form">
                {topBannerTexts.map((text, index) => (
                  <div key={index} className="form-group">
                    <label htmlFor={`bannerText${index + 1}`}>
                      Promotional Message {index + 1}
                      {index === 0 && <span className="required-label"> (Required)</span>}
                    </label>
                    <textarea
                      id={`bannerText${index + 1}`}
                      value={text}
                      onChange={(e) => handleBannerTextChange(index, e.target.value)}
                      className="banner-input banner-textarea"
                      placeholder={`Enter promotional message ${index + 1}... (e.g., 🌹 Special Offer: 20% Off Valentine's Packages | Book Today! 💕)`}
                      rows="2"
                    />
                  </div>
                ))}

                <div className="banner-preview-section">
                  <h4>Preview (How messages will appear with separators):</h4>
                  <div className="banner-preview-container">
                    {topBannerTexts.filter(text => text.trim()).length > 0 ? (
                      <div className="banner-preview">
                        {topBannerTexts
                          .filter(text => text.trim())
                          .map((text, index, filteredArray) => (
                            <span key={index}>
                              {text}
                              {index < filteredArray.length - 1 && (
                                <span className="preview-separator">
                                  {' '}
                                  {index % 4 === 0 && '🌹'}
                                  {index % 4 === 1 && '💕'}
                                  {index % 4 === 2 && '💍'}
                                  {index % 4 === 3 && '✨'}
                                  {' '}
                                </span>
                              )}
                            </span>
                          ))}
                      </div>
                    ) : (
                      <div className="banner-preview empty-preview">
                        No promotional messages entered yet
                      </div>
                    )}
                  </div>
                </div>

                <div className="update-section">
                  <button onClick={saveTopBannerTexts} className="update-btn">
                    Update Promotional Banners
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div className="admin-section">
              <h2>Portfolio Image Management</h2>
              <p>Add, remove, and organize portfolio images. Images are automatically saved when uploaded or added via URL.</p>
              
              <div className="add-image-section">
                {/* URL Option */}
                <div className="upload-methods">
                  <h3>Add from URL</h3>
                  <div className="add-image-form">
                    <input
                      type="url"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
                      className="image-url-input"
                    />
                    <button onClick={handleAddImage} className="add-image-btn update-btn">
                      Add Image
                    </button>
                  </div>
                </div>
              </div>

              <div className="portfolio-grid">
                {adminData.portfolioImages
                  .map((item, originalIndex) => ({ 
                    ...item, 
                    originalIndex,
                    // Handle both old format (string URLs) and new format (objects)
                    imageUrl: typeof item === 'string' ? item : item.url,
                    timestamp: typeof item === 'string' ? Date.now() - (originalIndex * 1000) : item.timestamp, // Give old images staggered timestamps
                    displayDate: (() => {
                      const imageTimestamp = typeof item === 'string' ? Date.now() - (originalIndex * 1000) : item.timestamp;
                      const daysDifference = (Date.now() - imageTimestamp) / (1000 * 60 * 60 * 24);
                      return daysDifference > 7 ? new Date(imageTimestamp).toLocaleDateString() : 'Recent';
                    })()
                  }))
                  .sort((a, b) => b.timestamp - a.timestamp) // Most recent first
                  .map((item, displayIndex) => (
                  <div key={item.id || displayIndex} className="portfolio-item">
                    <div className="portfolio-image-container">
                      <img
                        src={item.imageUrl}
                        alt={`Portfolio ${displayIndex + 1}`}
                        className="portfolio-preview"
                        loading="lazy"
                        width={400}
                        height={300}
                        onError={(e) => {
                          e.target.src = '/images/placeholder.jpg';
                        }}
                      />
                      <button
                        onClick={() => handleRemoveImage(item.originalIndex)}
                        className="remove-cross-btn"
                        title="Remove image"
                      >
                        ×
                      </button>
                    </div>
                    <div className="portfolio-info">
                      <small className="upload-date">
                        {item.displayDate}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="admin-section">
              <h2>Contact Information Management</h2>
              <p>Update contact information that appears throughout the website including footer, contact page, and social media links.</p>
              
              <div className="contact-form-grid">
                <div className="contact-basic-info">
                  <h3>📞 Basic Contact Information</h3>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      type="tel"
                      id="phone"
                      value={contactInfo.phone || ''}
                      onChange={(e) => handleContactInfoChange('phone', e.target.value)}
                      placeholder="+91 7840930140"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input
                      type="email"
                      id="email"
                      value={contactInfo.email || ''}
                      onChange={(e) => handleContactInfoChange('email', e.target.value)}
                      placeholder="mail.romanceretreat@gmail.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp Number:</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      value={contactInfo.whatsapp || ''}
                      onChange={(e) => handleContactInfoChange('whatsapp', e.target.value)}
                      placeholder="+917840930140"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Business Address:</label>
                    <textarea
                      id="address"
                      rows="3"
                      value={contactInfo.address || ''}
                      onChange={(e) => handleContactInfoChange('address', e.target.value)}
                      placeholder="H.No: 1417, Satyabhama Nivas, Near Naga Cottage, Tembwada, Morjim, Pernem, Goa-403512"
                    />
                  </div>
                </div>

                <div className="contact-social-media">
                  <h3>🌐 Social Media Links</h3>
                  
                  <div className="form-group">
                    <label htmlFor="facebook">Facebook URL:</label>
                    <input
                      type="url"
                      id="facebook"
                      value={contactInfo.socialMedia?.facebook || ''}
                      onChange={(e) => handleContactInfoChange('socialMedia.facebook', e.target.value)}
                      placeholder="https://facebook.com/romanceretreat"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="instagram">Instagram URL:</label>
                    <input
                      type="url"
                      id="instagram"
                      value={contactInfo.socialMedia?.instagram || ''}
                      onChange={(e) => handleContactInfoChange('socialMedia.instagram', e.target.value)}
                      placeholder="https://instagram.com/romanceretreat"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="twitter">Twitter/X URL:</label>
                    <input
                      type="url"
                      id="twitter"
                      value={contactInfo.socialMedia?.twitter || ''}
                      onChange={(e) => handleContactInfoChange('socialMedia.twitter', e.target.value)}
                      placeholder="https://x.com/romanceretreat"
                    />
                  </div>
                </div>
              </div>

              <div className="admin-update-section">
                <button onClick={saveContactInfo} className="update-btn">
                  💾 Update Contact Information
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;