import React, { useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
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

  // ✅ SCROLL TO HASH FIX
useEffect(() => {
  let attempts = 0;
  function scrollToHash() {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // adjust for navbar height
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else if (attempts < 10) {
        attempts++;
        setTimeout(scrollToHash, 100); // try again in 100ms
      }
    }
  }
  scrollToHash();
  return () => {};
}, [location]);

  return (
    <div className="booking-page">
      <Navbar />
      <div className="booking-main-grid">
        {/* Left: Hero Section */}
        <div className="booking-left-column">
          <section className="booking-hero">
            <div className="booking-hero-content">
              <h1>Book Your Perfect Moment</h1>
              <p>Let us create an unforgettable romantic experience tailored just for you. Fill out the form and we'll be in touch via WhatsApp!</p>
            </div>
          </section>
          <div className="contact-info-grid">
            <div className="contact-card">
              <div className="contact-icon"><FaWhatsapp size={28} color="#25D366" /></div>
              <h3>WhatsApp</h3>
              <p>We'll contact you via WhatsApp for quick and easy communication</p>
              <a href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} className="contact-link">{contactInfo.phone}</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><FaPhoneAlt size={26} color="#007bff" /></div>
              <h3>Phone Call</h3>
              <p>Prefer to speak directly? Give us a call anytime</p>
              <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-link">{contactInfo.phone}</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><FaEnvelope size={26} color="#ff9800" /></div>
              <h3>Email</h3>
              <p>Send us your detailed requirements via email</p>
              <a href={`mailto:${contactInfo.email}`} className="contact-link">{contactInfo.email}</a>
            </div>
          </div>
        </div>
        {/* Right: Booking Form */}
        <section className="booking-form-section" id="enquiry-form">
          <BookingForm preSelectedService={preSelectedService} />
        </section>
      </div>
      {/* How it Works section below the grid */}
      <section className="booking-note">
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
      </section>
      
      <Footer />
    </div>
  );
};

export default BookingPage;