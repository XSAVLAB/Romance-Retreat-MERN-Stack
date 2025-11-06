import React, { createContext, useState, useContext, useEffect } from 'react';
import { db } from '../firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  // console.log('AdminProvider initialized');
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

  // Load contactInfo from Firestore and listen for real-time updates
  useEffect(() => {
    const contactDocRef = doc(db, 'config', 'contactInfo');
    const unsubscribe = onSnapshot(contactDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setAdminData(prev => ({
          ...prev,
          contactInfo: data
        }));
      }
    });
    return () => unsubscribe();
  }, []);

  // Load portfolioImages from Firestore and listen for real-time updates
  useEffect(() => {
    const portfolioDocRef = doc(db, 'config', 'portfolioImages');
    const unsubscribe = onSnapshot(portfolioDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.portfolioImages) {
          setAdminData(prev => ({
            ...prev,
            portfolioImages: data.portfolioImages
          }));
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // Load topBannerTexts from Firestore and listen for real-time updates
  useEffect(() => {
    const bannersDocRef = doc(db, 'config', 'banners');
    const unsubscribe = onSnapshot(bannersDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.topBannerTexts) {
          setAdminData(prev => ({
            ...prev,
            topBannerTexts: data.topBannerTexts
          }));
        }
      }
    });
    return () => unsubscribe();
  }, []);

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
    // Always load saved portfolio images for public display
    const savedAdminData = localStorage.getItem('romanceRetreatAdminData');
    if (savedAdminData) {
      try {
        const parsedData = JSON.parse(savedAdminData);
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

    // Robust session check
    let isSessionValid = false;
    const adminSession = localStorage.getItem('romanceRetreatAdminSession');
    if (adminSession) {
      try {
        const sessionData = JSON.parse(adminSession);
        const now = new Date().getTime();
        // Session expires after 24 hours
        if (sessionData.timestamp && (now - sessionData.timestamp < 24 * 60 * 60 * 1000)) {
          isSessionValid = true;
        } else {
          localStorage.removeItem('romanceRetreatAdminSession');
        }
      } catch (error) {
        console.error('Error parsing admin session:', error);
        localStorage.removeItem('romanceRetreatAdminSession');
      }
    }
    setIsAdminLoggedIn(isSessionValid);
    console.log('AdminContext: isSessionValid =', isSessionValid);
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
  console.log('AdminContext: logoutAdmin called, session/data removed');
  window.location.href = '/'; // Force reload to home page and reset context
    // Always ensure isAdminLoggedIn is false if no valid session
    if (!localStorage.getItem('romanceRetreatAdminSession')) {
      setIsAdminLoggedIn(false);
      console.log('AdminContext: No valid session, isAdminLoggedIn set to false');
    }
  };

  const updateBannerTexts = (newTexts) => {
    setAdminData(prevData => ({
      ...prevData,
      bannerTexts: { ...prevData.bannerTexts, ...newTexts }
    }));
  };

  // Update topBannerTexts in Firestore
  const updateTopBanner = async (newTexts) => {
    const bannersDocRef = doc(db, 'config', 'banners');
    try {
      await setDoc(bannersDocRef, { topBannerTexts: newTexts });
      setAdminData(prevData => ({
        ...prevData,
        topBannerTexts: newTexts
      }));
  // console.log('Firestore banners update successful:', newTexts);
    } catch (error) {
      console.error('Firestore banners update failed:', error);
      alert('Failed to update banners: ' + error.message);
    }
  };

  // Update contactInfo in Firestore
  const updateContactInfo = async (newContactInfo) => {
    const contactDocRef = doc(db, 'config', 'contactInfo');
    try {
      await setDoc(contactDocRef, newContactInfo);
      setAdminData(prevData => ({
        ...prevData,
        contactInfo: newContactInfo
      }));
  // console.log('Firestore contact info update successful:', newContactInfo);
    } catch (error) {
      console.error('Firestore contact info update failed:', error);
      alert('Failed to update contact info: ' + error.message);
    }
  };

  const addPortfolioImage = (imageUrl) => {
    const imageWithTimestamp = {
      url: imageUrl,
      timestamp: new Date().getTime(),
      id: `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    setAdminData(prevData => {
      const updatedImages = [...prevData.portfolioImages, imageWithTimestamp];
      // Update Firestore
      const portfolioDocRef = doc(db, 'config', 'portfolioImages');
      setDoc(portfolioDocRef, { portfolioImages: updatedImages });
      return {
        ...prevData,
        portfolioImages: updatedImages
      };
    });
  };

  const removePortfolioImage = (index) => {
    setAdminData(prevData => {
      const updatedImages = prevData.portfolioImages.filter((_, i) => i !== index);
      // Update Firestore
      const portfolioDocRef = doc(db, 'config', 'portfolioImages');
      setDoc(portfolioDocRef, { portfolioImages: updatedImages });
      return {
        ...prevData,
        portfolioImages: updatedImages
      };
    });
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