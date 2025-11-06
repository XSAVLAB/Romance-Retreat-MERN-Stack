import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import BookingPage from './pages/BookingPage';
import ScrollToTop from './components/ScrollToTop';
import { PricingProvider } from './contexts/PricingContext';
import { AdminProvider } from './contexts/AdminContext';
import AdminDashboard from './components/admin/AdminDashboard';

// Import service pages
import React, { Suspense, lazy } from 'react';

function App() {
  const RomanticDinners = lazy(() => import('./pages/RomanticDinners'));
  const WeddingProposals = lazy(() => import('./pages/WeddingProposals'));
  const YachtDinner = lazy(() => import('./pages/YachtDinner'));
  const CoupleMassage = lazy(() => import('./pages/CoupleMassage'));
  const ValentinesDinners = lazy(() => import('./pages/ValentinesDinners'));
  const AnniversaryCelebrations = lazy(() => import('./pages/AnniversaryCelebrations'));
  const BirthdayCelebrations = lazy(() => import('./pages/BirthdayCelebrations'));
  const DinnerDateExperiences = lazy(() => import('./pages/DinnerDateExperiences'));
  const CustomizedMoments = lazy(() => import('./pages/CustomizedMoments'));

  return (
    <AdminProvider>
      <PricingProvider>
        <Router>
          <ScrollToTop />
          <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/services/romantic-dinners" element={<RomanticDinners />} />
                <Route path="/services/wedding-proposals" element={<WeddingProposals />} />
                <Route path="/services/yacht-dinner" element={<YachtDinner />} />
                <Route path="/services/couple-massage" element={<CoupleMassage />} />
                <Route path="/services/valentines-dinners" element={<ValentinesDinners />} />
                <Route path="/services/anniversary-celebrations" element={<AnniversaryCelebrations />} />
                <Route path="/services/birthday-celebrations" element={<BirthdayCelebrations />} />
                <Route path="/services/dinner-date-experiences" element={<DinnerDateExperiences />} />
                <Route path="/services/customized-moments" element={<CustomizedMoments />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </PricingProvider>
    </AdminProvider>
  );
}

export default App;
