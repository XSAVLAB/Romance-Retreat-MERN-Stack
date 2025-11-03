import React from 'react';
import { useLocation } from 'react-router-dom';
import { useContactInfo } from '../hooks/useContactInfo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import './BookingPage.css';

const BookingPage = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const preSelectedService = urlParams.get('service');
  const contactInfo = useContactInfo();

  return (
    <div className="booking-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="booking-hero">
        <div className="booking-hero-content">
          <h1>Book Your Perfect Moment</h1>
          <p>Let us create an unforgettable romantic experience tailored just for you. Fill out the form below and we'll be in touch via WhatsApp!</p>
        </div>
      </section>
      
      {/* Booking Form Section */}
      <section className="booking-form-section">
        <BookingForm preSelectedService={preSelectedService} />
      </section>
      
      {/* Contact Information */}
      <section className="booking-contact-info">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>WhatsApp</h3>
              <p>We'll contact you via WhatsApp for quick and easy communication</p>
              <a href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} className="contact-link">{contactInfo.phone}</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone Call</h3>
              <p>Prefer to speak directly? Give us a call anytime</p>
              <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-link">{contactInfo.phone}</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>Send us your detailed requirements via email</p>
              <a href={`mailto:${contactInfo.email}`} className="contact-link">{contactInfo.email}</a>
            </div>
          </div>
          
          <div className="booking-note">
            <h3>🌹 How it Works</h3>
            <div className="steps">
              <div className="step">
                <span className="step-number">1</span>
                <p>Fill out the enquiry form with your details and preferences</p>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <p>Click "Send Enquiry" to open WhatsApp with your details</p>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <p>Send the message and we'll contact you within 2 hours</p>
              </div>
              <div className="step">
                <span className="step-number">4</span>
                <p>We'll discuss details, confirm availability, and finalize your booking</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BookingPage;