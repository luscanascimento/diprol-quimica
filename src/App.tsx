import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { Preloader } from './components/sections/Preloader';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutAuthoritySection } from './components/sections/AboutAuthoritySection';
import { SegmentsSection } from './components/sections/SegmentsSection';
import { DiferenciaisSection } from './components/sections/DiferenciaisSection';
import { CustomEngineeringSection } from './components/sections/CustomEngineeringSection';
import { SocialProofSection } from './components/sections/SocialProofSection';
import { QuoteCalculatorSection } from './components/sections/QuoteCalculatorSection';
import { FooterSection } from './components/sections/FooterSection';
import { FloatingWhatsApp } from './components/sections/FloatingWhatsApp';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scroll with Lenis and GSAP integration
  useLenis(!isLoading);

  return (
    <div className="relative min-h-screen bg-[#060d1a] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      
      {/* 0. Preloader Screen */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Content (revealed after preloader) */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Navigation Bar */}
        <Navbar />

        <main>
          {/* 1. Hero Section (with Three.js WebGL molecular & particle scene) */}
          <HeroSection />

          {/* 2. Authority & Metrics Section */}
          <AboutAuthoritySection />

          {/* 3. Specialized Segments Section */}
          <SegmentsSection />

          {/* 4. Competitive Advantages & Pillars */}
          <DiferenciaisSection />

          {/* 5. Custom Chemical Engineering & Dilution Dosing */}
          <CustomEngineeringSection />

          {/* 6. Social Proof, Industrial Marquee & Testimonials */}
          <SocialProofSection />

          {/* 7. Interactive B2B Quote Calculator & Sanitized Contact Form */}
          <QuoteCalculatorSection />
        </main>

        {/* 8. Regional Coverage & Footer */}
        <FooterSection />

        {/* Floating WhatsApp CTA */}
        <FloatingWhatsApp />

      </div>

    </div>
  );
};

export default App;
