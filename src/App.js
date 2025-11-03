import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Admin from './components/Admin';
import ScrollToTop from './components/ScrollToTop';
import { PricingProvider } from './contexts/PricingContext';

// Import service pages
import { 
  RomanticDinners, 
  WeddingProposals, 
  YachtDinner, 
  CoupleMassage,
  ValentinesDinners,
  AnniversaryCelebrations,
  BirthdayCelebrations,
  DinnerDateExperiences,
  CustomizedMoments
} from './pages';

function App() {
  return (
    <PricingProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            
            {/* Service Pages Routes */}
            <Route path="/services/romantic-dinners" element={<RomanticDinners />} />
            <Route path="/services/wedding-proposals" element={<WeddingProposals />} />
            <Route path="/services/yacht-dinner" element={<YachtDinner />} />
            <Route path="/services/couple-massage" element={<CoupleMassage />} />
            <Route path="/services/valentines-dinners" element={<ValentinesDinners />} />
            <Route path="/services/anniversary-celebrations" element={<AnniversaryCelebrations />} />
            <Route path="/services/birthday-celebrations" element={<BirthdayCelebrations />} />
            <Route path="/services/dinner-date-experiences" element={<DinnerDateExperiences />} />
            <Route path="/services/customized-moments" element={<CustomizedMoments />} />
          </Routes>
        </div>
      </Router>
    </PricingProvider>
  );
}

export default App;
