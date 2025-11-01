import React from 'react';
import './Services.css';
import Navbar from './Navbar';
import Footer from './Footer';

// Import service images
import romanticDinnerImg from './images/Services/Romantic_Dinner.jpg';
import weddingProposalImg from './images/Services/Wedding_Proposal.jpg';
import valentinesDinnerImg from './images/Services/Valentines_Dinner.jpg';
import birthdayCelebrationsImg from './images/Services/Birthday_Celebrations.jpg';
import anniversaryCelebrationsImg from './images/Services/Anniversary_Celebrations.jpg';
import dinnerDateImg from './images/Services/Dinner_Date.png';
import yachtDinnerImg from './images/Services/Yatch_Dinner.jpg';
import coupleMassageImg from './images/Services/Couple_Massage.jpg';
import customizedMomentsImg from './images/Services/Customized_Moments.jpg';

const Services = () => {
  return (
    <div className="services">
      <Navbar />
      <div className="services-container">
        <header className="services-header">
          <h1>Our Services</h1>
          <p className="services-intro">
            At Romance Retreat, we offer a suite of bespoke experiences tailored to you and your partner. 
            Each service is crafted with love and attention to detail to create unforgettable moments.
          </p>
        </header>

        <section className="services-content">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src={romanticDinnerImg} alt="Romantic Dinners" />
              </div>
              <div className="service-content">
                <h3>Romantic Dinners</h3>
                <p>Candle-lit moments, beachfront tables, rooftop ambience. Experience intimate dining like never before.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={weddingProposalImg} alt="Wedding Proposals" />
              </div>
              <div className="service-content">
                <h3>Wedding Proposals</h3>
                <p>Thoughtfully designed settings, surprise moments, professional coordination. Make your proposal perfect.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={valentinesDinnerImg} alt="Valentine's Dinners" />
              </div>
              <div className="service-content">
                <h3>Valentine's Dinners</h3>
                <p>Seasonal specials, curated menus, love-filled décor. Celebrate love in the most romantic way.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={birthdayCelebrationsImg} alt="Birthday Celebrations" />
              </div>
              <div className="service-content">
                <h3>Birthday Celebrations</h3>
                <p>Make your partner's birthday unforgettable with personalised packages, surprise setups, and beautiful keepsakes.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={anniversaryCelebrationsImg} alt="Anniversary Celebrations" />
              </div>
              <div className="service-content">
                <h3>Anniversary Celebrations</h3>
                <p>Celebrate your love milestones with themed decorations, romantic ambiance, and custom anniversary experiences.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={dinnerDateImg} alt="Dinner Date Experiences" />
              </div>
              <div className="service-content">
                <h3>Dinner Date Experiences</h3>
                <p>Just the two of you, in unique locations — on the beach, in a garden, or on a private yacht.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={yachtDinnerImg} alt="Yacht Dinner" />
              </div>
              <div className="service-content">
                <h3>Yacht Dinner</h3>
                <p>Cruise along the coastline, sip your drink as the sun melts into the sea, dine under the stars.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={coupleMassageImg} alt="Couple Massage & Spa Rituals" />
              </div>
              <div className="service-content">
                <h3>Couple Massage & Spa Rituals</h3>
                <p>Reconnect, relax, rejuvenate — side by side, in a serene space designed for two.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={customizedMomentsImg} alt="Customised Romance Moments" />
              </div>
              <div className="service-content">
                <h3>Customised Romance Moments</h3>
                <p>Tell us your dream, and we'll craft a bespoke experience that's uniquely yours.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Create Your Perfect Moment?</h2>
          <p>
            Whatever your occasion — big or small — let us take care of the details so you can focus on each other.
          </p>
          <button className="contact-cta">Book Your Experience</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;