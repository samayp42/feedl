/**
 * Feedl Landing Page - Redesigned
 * Clean, product-focused landing page
 */

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import WhoIsThisFor from './WhoIsThisFor';
import PortfolioShowcase from './PortfolioShowcase';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Section with Demo Video */}
      <HeroSection />

      {/* How It Works - 3 Steps */}
      <HowItWorks />

      {/* Who Is This For */}
      <WhoIsThisFor />

      {/* Before/After Portfolio */}
      <PortfolioShowcase />

      {/* Pricing */}
      <PricingSection />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
