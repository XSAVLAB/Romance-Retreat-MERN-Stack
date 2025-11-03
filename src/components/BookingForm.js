import React, { useState, useEffect } from 'react';
import { useContactInfo } from '../hooks/useContactInfo';
import './BookingForm.css';

const BookingForm = ({ preSelectedService }) => {
  const contactInfo = useContactInfo();
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    email: '',
    selectedService: '',
    preferredDate: '',
    preferredTime: '',
    numberOfGuests: '2',
    occasion: '',
    specialRequests: '',
    venuePreference: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set the pre-selected service when component mounts or when preSelectedService changes
  useEffect(() => {
    if (preSelectedService) {
      setFormData(prevData => ({
        ...prevData,
        selectedService: preSelectedService
      }));
    }
  }, [preSelectedService]);

  const services = [
    'Romantic Dinners',
    'Wedding Proposals',
    'Valentine\'s Dinners',
    'Anniversary Celebrations',
    'Birthday Celebrations',
    'Dinner Date Experiences',
    'Yacht Dinners',
    'Couple Massage & Spa',
    'Customized Moments'
  ];

  const venues = [
    'Beach Front',
    'Rooftop Restaurant',
    'Private Villa',
    'Garden Setup',
    'Yacht/Boat',
    'Hotel Suite',
    'Other/Flexible'
  ];

  const timeSlots = [
    '6:00 PM - 8:00 PM',
    '7:00 PM - 9:00 PM',
    '8:00 PM - 10:00 PM',
    '9:00 PM - 11:00 PM',
    '10:00 PM - 12:00 AM',
    '11:00 PM - 1:00 AM',
    'Flexible Timing'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    // Format date to DD-MM-YYYY
    const formatDate = (dateString) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    };

    const formattedDate = formatDate(formData.preferredDate);

    const message = `🌹 *ROMANCE RETREAT - NEW ENQUIRY* 🌹

📋 *CUSTOMER DETAILS:*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.customerName}
📞 *Phone:* ${formData.phoneNumber}
📧 *Email:* ${formData.email}

🎯 *SERVICE DETAILS:*
━━━━━━━━━━━━━━━━━━━━
💝 *Service:* ${formData.selectedService}
📅 *Preferred Date:* ${formattedDate}
⏰ *Preferred Time:* ${formData.preferredTime}
👥 *Number of Guests:* ${formData.numberOfGuests}
🏖️ *Venue Preference:* ${formData.venuePreference}
🎉 *Occasion:* ${formData.occasion}

💬 *SPECIAL REQUESTS:*
━━━━━━━━━━━━━━━━━━━━
${formData.specialRequests || 'None'}

━━━━━━━━━━━━━━━━━━━━
💕 *Please contact the customer to discuss details and confirm availability!*

_Sent via Romance Retreat Website_ 🌹`;

    return message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    const requiredFields = ['customerName', 'phoneNumber', 'email', 'selectedService', 'preferredDate'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      alert('Please fill in all required fields: ' + missingFields.join(', '));
      setIsSubmitting(false);
      return;
    }

    try {
      // Debug contact info (remove in production)
      // console.log('Contact Info:', contactInfo);
      
      // Generate WhatsApp message
      const message = generateWhatsAppMessage();
      const adminWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      
      // Validate WhatsApp number
      if (!adminWhatsApp || adminWhatsApp.length < 10) {
        console.error('Invalid WhatsApp number configuration');
        throw new Error('Invalid WhatsApp number configuration');
      }
      
      const encodedMessage = encodeURIComponent(message); // Properly encode the message for URL
      
      // Check message length (WhatsApp has URL length limits)
      if (encodedMessage.length > 2000) {
        console.warn('Message might be too long for WhatsApp URL:', encodedMessage.length);
      }
      
      const whatsappURL = `https://wa.me/${adminWhatsApp}?text=${encodedMessage}`;
      
      // Debug logs (remove in production)
      // console.log('WhatsApp URL:', whatsappURL);
      // console.log('Admin WhatsApp:', adminWhatsApp);
      // console.log('Message length:', encodedMessage.length);
      
      // Detect mobile devices
      const isMobile = navigator.userAgent.match(/Mobile|Android|iPhone|iPad/i);
      
      try {
        if (isMobile) {
          // For mobile devices: open WhatsApp app directly
          window.location.href = whatsappURL;
          alert('Opening WhatsApp app with your enquiry details!');
          
          // Provide fallback for mobile users in case the app doesn't open
          setTimeout(() => {
            const shouldCopy = window.confirm('If WhatsApp app didn\'t open or the message didn\'t auto-fill, would you like to copy it to send manually?');
            if (shouldCopy) {
              const rawMessage = generateWhatsAppMessage();
              navigator.clipboard.writeText(rawMessage).then(() => {
                alert('✅ Message copied to clipboard!\n\nPlease paste it in WhatsApp chat with +91 7840930140');
              }).catch(() => {
                alert(`Please copy this message and send it to +91 7840930140:\n\n${rawMessage.substring(0, 300)}...`);
                console.log('Full message for mobile:', rawMessage);
              });
            }
          }, 3000);
          
        } else {
          // For desktop: force WhatsApp Web to avoid desktop app limitations
          const whatsappWindow = window.open(whatsappURL, '_blank');
          
          // Check if popup was blocked
          if (!whatsappWindow) {
            // Fallback: try direct navigation
            window.location.href = whatsappURL;
          }
          
          alert('Opening WhatsApp Web with your enquiry details pre-filled! If the message doesn\'t appear, we\'ll provide a backup option.');
          
          // Provide fallback option for desktop users
          setTimeout(() => {
            const shouldCopy = window.confirm('If the message didn\'t auto-fill in WhatsApp Web, would you like to copy it to send manually?');
            if (shouldCopy) {
              const rawMessage = generateWhatsAppMessage();
              navigator.clipboard.writeText(rawMessage).then(() => {
                alert('✅ Message copied to clipboard!\n\nPlease paste it in the WhatsApp Web chat with +91 7840930140');
              }).catch(() => {
                alert(`Please copy this message and send it to +91 7840930140:\n\n${rawMessage.substring(0, 400)}${rawMessage.length > 400 ? '...[check browser console for full message]' : ''}`);
                console.log('Full WhatsApp message to copy:', rawMessage);
              });
            }
          }, 4000);
        }
        
      } catch (error) {
        console.error('Error opening WhatsApp:', error);
        // Final fallback - copy message and show instructions
        const rawMessage = generateWhatsAppMessage();
        if (navigator.clipboard) {
          navigator.clipboard.writeText(rawMessage).then(() => {
            const instruction = isMobile 
              ? 'WhatsApp could not be opened. Message copied to clipboard!\n\nPlease open WhatsApp and send the message to +91 7840930140'
              : 'WhatsApp could not be opened. Message copied to clipboard!\n\nPlease visit web.whatsapp.com and send the message to +91 7840930140';
            alert(instruction);
          });
        } else {
          const instruction = isMobile 
            ? `Please open WhatsApp and send this message to +91 7840930140:\n\n${rawMessage}`
            : `Please visit web.whatsapp.com and send this message to +91 7840930140:\n\n${rawMessage}`;
          alert(instruction);
        }
      }
      
      // Reset form but preserve pre-selected service if available
      setFormData({
        customerName: '',
        phoneNumber: '',
        email: '',
        selectedService: preSelectedService || '',
        preferredDate: '',
        preferredTime: '',
        numberOfGuests: '2',
        occasion: '',
        specialRequests: '',
        venuePreference: ''
      });

    } catch (error) {
      console.error('Error sending enquiry:', error);
      let errorMessage = 'There was an error sending your enquiry. ';
      
      if (error.message.includes('Invalid WhatsApp number')) {
        errorMessage += 'WhatsApp number configuration issue. Please contact us directly at +91 7840930140.';
      } else if (error.message.includes('Popup blocked')) {
        errorMessage += 'Please allow popups for this site and try again.';
      } else {
        errorMessage += 'Please try again or contact us directly at +91 7840930140.';
      }
      
      alert(errorMessage);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form-header">
        <h2>Send us an Enquiry</h2>
        <p>Fill out the form below and we'll contact you via WhatsApp to discuss your perfect romantic experience!</p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Customer Information */}
        <div className="form-section">
          <h3>Your Information</h3>
          
          <div className="form-group">
            <label htmlFor="customerName">Full Name *</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+91 7840930140"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="form-section">
          <h3>Service Details</h3>
          
          <div className="form-group">
            <label htmlFor="selectedService">Select Service *</label>
            <select
              id="selectedService"
              name="selectedService"
              value={formData.selectedService}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose a service...</option>
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="preferredDate">Preferred Date *</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Time</label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
              >
                <option value="">Select time...</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="numberOfGuests">Number of Guests</label>
              <input
                type="number"
                id="numberOfGuests"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleInputChange}
                min="1"
                max="20"
              />
            </div>

            <div className="form-group">
              <label htmlFor="venuePreference">Venue Preference</label>
              <select
                id="venuePreference"
                name="venuePreference"
                value={formData.venuePreference}
                onChange={handleInputChange}
              >
                <option value="">Select venue...</option>
                {venues.map(venue => (
                  <option key={venue} value={venue}>{venue}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="form-section">
          <h3>Additional Details</h3>
          
          <div className="form-group">
            <label htmlFor="occasion">Special Occasion</label>
            <input
              type="text"
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleInputChange}
              placeholder="e.g., Anniversary, Birthday, Proposal"
            />
          </div>

          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows="4"
              placeholder="Any specific requirements, dietary restrictions, or special arrangements..."
            />
          </div>
        </div>

        <div className="form-submit">
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : '💕 Send Enquiry via WhatsApp'}
          </button>
          <p className="form-note">
            You'll be redirected to WhatsApp to send your enquiry. Our team will contact you within 2 hours!
          </p>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;