import { useAdmin } from '../contexts/AdminContext';

// Hardcoded fallback values that are always safe to use
const FALLBACK_CONTACT_INFO = {
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

export const useContactInfo = () => {
  // Always call the hook at the top level
  const { adminData } = useAdmin();
  
  try {
    // Safely merge admin data with fallbacks, ensuring no field is ever undefined
    const contactInfo = {
      phone: adminData?.contactInfo?.phone || FALLBACK_CONTACT_INFO.phone,
      email: adminData?.contactInfo?.email || FALLBACK_CONTACT_INFO.email,
      address: adminData?.contactInfo?.address || FALLBACK_CONTACT_INFO.address,
      whatsapp: adminData?.contactInfo?.whatsapp || FALLBACK_CONTACT_INFO.whatsapp,
      socialMedia: {
        facebook: adminData?.contactInfo?.socialMedia?.facebook || FALLBACK_CONTACT_INFO.socialMedia.facebook,
        instagram: adminData?.contactInfo?.socialMedia?.instagram || FALLBACK_CONTACT_INFO.socialMedia.instagram,
        twitter: adminData?.contactInfo?.socialMedia?.twitter || FALLBACK_CONTACT_INFO.socialMedia.twitter
      }
    };
    
    return contactInfo;
  } catch (error) {
    // If anything goes wrong with data processing, return safe fallbacks
    console.warn('Error processing contact info, using fallbacks:', error);
    return FALLBACK_CONTACT_INFO;
  }
};