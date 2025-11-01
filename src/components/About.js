import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-container">
        <header className="about-header">
          <h1>About Us</h1>
          <p className="about-intro">
            Welcome to Romance Retreat — where every moment is crafted into a memory, and every experience is designed to celebrate your love story. Nestled in the heart of Goa, we specialise in creating intimate, unforgettable moments for couples, whether you're planning a surprise proposal, celebrating a milestone, or simply seeking to reconnect.
          </p>
        </header>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Romance Retreat was born from a simple belief: that love should be celebrated, celebrated beautifully, and celebrated in style. Here in Goa's lush tropical surroundings, with its golden beaches, gentle sea breeze and laid-back charm, we found the perfect setting for lovers to escape the ordinary and embrace something truly special. From romantic dinners under the stars to tranquil couple's massages and private yacht rides at sunset — we turn your heartfelt desires into effortless reality.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Dedicated focus on couples</h3>
              <p>Everything we do centres around you and your partner.</p>
            </div>
            <div className="feature-item">
              <h3>Goa-based local expertise</h3>
              <p>We know the best spots, the hidden gems, the sunset views, the quiet corners.</p>
            </div>
            <div className="feature-item">
              <h3>Personalisation & attention to detail</h3>
              <p>From the lighting and décor to the menu and music, we take care of the small touches that matter.</p>
            </div>
            <div className="feature-item">
              <h3>Professional service</h3>
              <p>Reliable, discreet, warm-hearted. We're here to make things effortless and flawless.</p>
            </div>
            <div className="feature-item">
              <h3>Memories that last</h3>
              <p>Because the experience isn't just for the moment. It's for always.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            To be your go-to destination in Goa for celebrating love, connection and magical moments. Whether you're starting a new chapter or simply want to pause and cherish the now — Romance Retreat is here to make it extraordinary.
          </p>
        </section>

        <section className="about-section cta-section">
          <h2>Let's Celebrate Together</h2>
          <p>
            Whatever your occasion — big or small — let us take care of the details so you can focus on each other. Contact us, tell us your dream, and we'll help you craft it into a reality.
          </p>
          <p className="tagline">
            <strong>Romance Retreat — Where Love Finds Its Perfect Setting.</strong>
          </p>
          <button className="contact-cta">Contact Us Today</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;