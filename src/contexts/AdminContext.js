import React, { createContext, useState, useContext, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  console.log('AdminProvider initialized');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminData, setAdminData] = useState({
    bannerTexts: {
      heroTitle: 'Romance Retreat',
      heroSubtitle: 'Creating Unforgettable Romantic Experiences in Goa',
      homeOfferText: 'Book your perfect romantic experience today',
      contactBanner: 'Ready to create your perfect romantic experience?'
    },
    topBannerTexts: [
      '🌹 Limited Time Offer: 20% Off Valentine\'s Dinner Packages | Book Your Romantic Getaway Today! 💕',
      '✨ Special Deal: Complimentary Couple\'s Massage with Yacht Dinner Booking | Create Unforgettable Memories 🛥️',
      '🎉 Anniversary Special: Free Proposal Setup with Any Celebration Package | Love is in the Air! 💍',
      '💝 Exclusive Offer: Personalized Romantic Experiences Starting at Special Prices | Contact Us Today! 🌺'
    ],
    contactInfo: {
      phone: '+91 7840930140',
      email: 'mail.romanceretreat@gmail.com',
      address: 'H.No: 1417, Satyabhama Nivas, Near Naga Cottage, Tembwada, Morjim, Pernem, Goa-403512',
      whatsapp: '+917840930140',
      socialMedia: {
        facebook: 'https://facebook.com/romanceretreat',
        instagram: 'https://instagram.com/romanceretreat',
        twitter: 'https://x.com/romanceretreat'
      }
    },
    portfolioImages: [
      // No placeholder images - admin can add real images via URLs or upload
    ]
  });

  // Admin credentials from environment variables (secure approach)
  const adminCredentials = {
    username: process.env.REACT_APP_ADMIN_USERNAME || 'admin',
    password: process.env.REACT_APP_ADMIN_PASSWORD || 'defaultpassword'
  };

  // Warn if environment variables are not set properly
  if (!process.env.REACT_APP_ADMIN_PASSWORD || process.env.REACT_APP_ADMIN_PASSWORD === 'defaultpassword') {
    console.warn('⚠️  Admin password not set in environment variables. Using default password is not secure for production!');
  }

  // Check for existing admin session on app load
  useEffect(() => {
    console.log('AdminContext useEffect triggered');
    
    // Always load saved portfolio images for public display
    const savedAdminData = localStorage.getItem('romanceRetreatAdminData');
    if (savedAdminData) {
      try {
        const parsedData = JSON.parse(savedAdminData);
        console.log('Loading saved admin data for portfolio:', parsedData);
        
        // Merge saved data with current defaults to preserve any missing fields
        setAdminData(prevData => ({
          ...prevData,
          ...parsedData,
          contactInfo: {
            ...prevData.contactInfo,
            ...(parsedData.contactInfo || {}),
            socialMedia: {
              ...prevData.contactInfo.socialMedia,
              ...(parsedData.contactInfo?.socialMedia || {})
            }
          }
        }));
      } catch (error) {
        console.error('Error parsing saved admin data:', error);
      }
    }
    
    // Check for admin session
    const adminSession = localStorage.getItem('romanceRetreatAdminSession');
    if (adminSession) {
      try {
        const sessionData = JSON.parse(adminSession);
        const now = new Date().getTime();
        // Session expires after 24 hours
        if (sessionData.timestamp && (now - sessionData.timestamp < 24 * 60 * 60 * 1000)) {
          console.log('Admin session found and valid');
          setIsAdminLoggedIn(true);
        } else {
          localStorage.removeItem('romanceRetreatAdminSession');
        }
      } catch (error) {
        console.error('Error parsing admin session:', error);
        localStorage.removeItem('romanceRetreatAdminSession');
      }
    }
  }, []);

  // Save admin data to localStorage whenever it changes
  useEffect(() => {
    if (isAdminLoggedIn) {
      localStorage.setItem('romanceRetreatAdminData', JSON.stringify(adminData));
    }
  }, [adminData, isAdminLoggedIn]);

  const loginAdmin = (username, password) => {
    if (username === adminCredentials.username && password === adminCredentials.password) {
      setIsAdminLoggedIn(true);
      const sessionData = {
        timestamp: new Date().getTime(),
        isLoggedIn: true
      };
      localStorage.setItem('romanceRetreatAdminSession', JSON.stringify(sessionData));
      return { success: true };
    } else {
      return { success: false, message: 'Invalid credentials' };
    }
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('romanceRetreatAdminSession');
    localStorage.removeItem('romanceRetreatAdminData');
  };

  const updateBannerTexts = (newTexts) => {
    setAdminData(prevData => ({
      ...prevData,
      bannerTexts: { ...prevData.bannerTexts, ...newTexts }
    }));
  };

  const updateTopBanner = (newTexts) => {
    setAdminData(prevData => ({
      ...prevData,
      topBannerTexts: newTexts
    }));
  };

  const updateContactInfo = (newContactInfo) => {
    console.log('Updating contact info with:', newContactInfo);
    
    setAdminData(prevData => {
      // Ensure we have the complete structure before merging
      const currentContactInfo = prevData.contactInfo || {
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

      console.log('Current contact info before update:', currentContactInfo);

      // Deep merge ensuring no fields are lost
      const updatedContactInfo = {
        phone: newContactInfo.phone !== undefined ? newContactInfo.phone : currentContactInfo.phone,
        email: newContactInfo.email !== undefined ? newContactInfo.email : currentContactInfo.email,
        address: newContactInfo.address !== undefined ? newContactInfo.address : currentContactInfo.address,
        whatsapp: newContactInfo.whatsapp !== undefined ? newContactInfo.whatsapp : currentContactInfo.whatsapp,
        socialMedia: {
          facebook: newContactInfo.socialMedia?.facebook !== undefined ? newContactInfo.socialMedia.facebook : currentContactInfo.socialMedia?.facebook || 'https://facebook.com/romanceretreat',
          instagram: newContactInfo.socialMedia?.instagram !== undefined ? newContactInfo.socialMedia.instagram : currentContactInfo.socialMedia?.instagram || 'https://instagram.com/romanceretreat',
          twitter: newContactInfo.socialMedia?.twitter !== undefined ? newContactInfo.socialMedia.twitter : currentContactInfo.socialMedia?.twitter || 'https://x.com/romanceretreat'
        }
      };

      console.log('Final contact info after update:', updatedContactInfo);

      const result = {
        ...prevData,
        contactInfo: updatedContactInfo
      };

      return result;
    });
  };

  const addPortfolioImage = (imageUrl) => {
    const imageWithTimestamp = {
      url: imageUrl,
      timestamp: new Date().getTime(),
      id: `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    
    setAdminData(prevData => ({
      ...prevData,
      portfolioImages: [...prevData.portfolioImages, imageWithTimestamp]
    }));
  };

  const removePortfolioImage = (index) => {
    setAdminData(prevData => ({
      ...prevData,
      portfolioImages: prevData.portfolioImages.filter((_, i) => i !== index)
    }));
  };

  const reorderPortfolioImages = (fromIndex, toIndex) => {
    setAdminData(prevData => {
      const newImages = [...prevData.portfolioImages];
      const [removed] = newImages.splice(fromIndex, 1);
      newImages.splice(toIndex, 0, removed);
      return {
        ...prevData,
        portfolioImages: newImages
      };
    });
  };

  const value = {
    isAdminLoggedIn,
    adminData,
    loginAdmin,
    logoutAdmin,
    updateBannerTexts,
    updateTopBanner,
    updateContactInfo,
    addPortfolioImage,
    removePortfolioImage,
    reorderPortfolioImages
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};