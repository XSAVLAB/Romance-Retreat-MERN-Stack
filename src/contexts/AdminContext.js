import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AdminContext = createContext();

const getAdminLoginErrorMessage = (error) => {
  switch (error?.code) {
    case 'auth/invalid-credential':
    case 'auth/invalid-login-credentials':
    case 'auth/wrong-password':
      return 'Incorrect admin password for the configured Firebase account.';
    case 'auth/user-not-found':
      return 'The configured admin email does not exist in Firebase Authentication.';
    case 'auth/invalid-email':
      return 'The configured admin email is invalid.';
    case 'auth/operation-not-allowed':
      return 'Email/password sign-in is disabled in Firebase Authentication.';
    case 'auth/too-many-requests':
      return 'Too many failed login attempts. Try again later or reset the password.';
    default:
      return error?.message || 'Login failed';
  }
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const configuredAdminEmail = (process.env.REACT_APP_ADMIN_EMAIL || '').trim();
  const configuredAdminUsername = (process.env.REACT_APP_ADMIN_USERNAME || 'admin').trim();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isAuthReady, setIsAuthReady] = useState(false);
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

  // Auth state is source-of-truth; no localStorage session trust.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (!user) {
          setIsAdminLoggedIn(false);
          return;
        }

        const tokenResult = await user.getIdTokenResult(true);
        setIsAdminLoggedIn(tokenResult.claims.admin === true);
      } catch (error) {
        console.error('Admin auth state check failed:', error);
        setIsAdminLoggedIn(false);
      } finally {
        setIsAuthReady(true);
      }
    });

    return () => unsubscribe();
  }, []);

  const resolveAdminEmailFromUserId = (userId) => {
    const rawUserId = (userId || '').trim();
    if (!rawUserId || !configuredAdminEmail || !configuredAdminUsername) {
      return '';
    }

    if (rawUserId.toLowerCase() !== configuredAdminUsername.toLowerCase()) {
      return '';
    }

    return configuredAdminEmail;
  };

  const loginAdmin = async (userId, password) => {
    try {
      const loginEmail = resolveAdminEmailFromUserId(userId);
      if (!loginEmail) {
        return {
          success: false,
          message: 'Invalid admin user ID.'
        };
      }

      const credentials = await signInWithEmailAndPassword(auth, loginEmail, password);
      const tokenResult = await credentials.user.getIdTokenResult(true);

      if (tokenResult.claims.admin !== true) {
        await signOut(auth);
        return { success: false, message: 'Access denied: admin claim is missing.' };
      }

      setIsAdminLoggedIn(true);
      return { success: true };
    } catch (error) {
      console.error('Admin login failed:', error?.code || error?.message || error);
      return { success: false, message: getAdminLoginErrorMessage(error) };
    }
  };

  const logoutAdmin = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Admin logout failed:', error);
    } finally {
      setIsAdminLoggedIn(false);
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
    isAuthReady,
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