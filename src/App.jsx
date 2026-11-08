import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import AboutGisa from './pages/AboutGisa';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Packages from './pages/Packages';
import PackageDetails from './pages/PackageDetails';
import Industries from './pages/Industries';
import GlobalMarkets from './pages/GlobalMarkets';
import Certifications from './pages/Certifications';
import Insights from './pages/Insights';
import InsightDetails from './pages/InsightDetails';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about-suyog-walke" element={<Navigate to="/about" replace />} />
        <Route path="about-gisa" element={<AboutGisa />} />
        
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetails />} />
        
        <Route path="packages" element={<Packages />} />
        <Route path="packages/:slug" element={<PackageDetails />} />
        
        <Route path="industries" element={<Industries />} />
        <Route path="global-markets" element={<GlobalMarkets />} />
        <Route path="testimonials" element={<Navigate to="/about" replace />} />
        <Route path="certifications" element={<Certifications />} />
        
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:slug" element={<InsightDetails />} />
        
        <Route path="contact" element={<Contact />} />
        <Route path="book-consultation" element={<Booking />} />
        <Route path="booking" element={<Navigate to="/book-consultation" replace />} />
        
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<Terms />} />
        <Route path="terms" element={<Navigate to="/terms-and-conditions" replace />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="admin" element={<Admin />} />
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

