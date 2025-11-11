/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
const feedlLogoUrl = new URL('../assets/feedl.png', import.meta.url).href;
const headerBgUrl = new URL('../assets/header-bg.jpg', import.meta.url).href;

// Import all before and after images as pairs
const imagePairs = [
  {
    before: new URL('../assets/before.JPG', import.meta.url).href,
    after: new URL('../assets/after.png', import.meta.url).href,
  },
  {
    before: new URL('../assets/before2.JPG', import.meta.url).href,
    after: new URL('../assets/after2.png', import.meta.url).href,
  },
  {
    before: new URL('../assets/before3.JPG', import.meta.url).href,
    after: new URL('../assets/after3.png', import.meta.url).href,
  },
  {
    before: new URL('../assets/before4.JPG', import.meta.url).href,
    after: new URL('../assets/after4.png', import.meta.url).href,
  },
  {
    before: new URL('../assets/before5.JPG', import.meta.url).href,
    after: new URL('../assets/after5.png', import.meta.url).href,
  },
];

const LandingPage: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  // Preload all images for smooth carousel
  useEffect(() => {
    imagePairs.forEach(pair => {
      const beforeImg = new Image();
      beforeImg.src = pair.before;
      const afterImg = new Image();
      afterImg.src = pair.after;
    });
  }, []);

  return (
    <div className="w-full landing-root min-h-screen relative">
      {/* Hero Section */}
      <section className="relative w-full pt-16 md:pt-24 pb-16 md:pb-20 text-center overflow-hidden">
        {/* Backdrop image spanning edge-to-edge within hero */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url(${headerBgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Subtle aurora behind center image */}
        <div className="hero-aurora" aria-hidden="true"></div>

        <div className="container relative z-10">
          {/* Floating decor - typography, color chips, shapes */}
          <div className="floating-decor" aria-hidden="true">
            <div className="float-item float-slow decor-chip decor-circle accent-teal text-sm" style={{left: '3%', top: '12%'}}>Aa</div>
            <div className="float-item float-med decor-chip decor-square accent-saffron text-xs" style={{right: '6%', top: '18%'}}>#FFD66B</div>
            <div className="float-item float-fast decor-chip decor-hex accent-green text-xs" style={{left: '10%', bottom: '20%'}}>#A8E66B</div>
            <div className="float-item float-med decor-chip decor-circle accent-coral text-sm" style={{right: '10%', bottom: '26%'}}>Aa</div>
            <div className="float-item float-slow decor-chip decor-square accent-teal text-xs" style={{left: '22%', top: '34%'}}>Serif</div>
            <div className="float-item float-fast decor-chip decor-hex accent-saffron text-xs" style={{right: '22%', top: '40%'}}>Sans</div>
          </div>
          {/* Centered Feedl image */}
          <div className="relative w-full flex items-center justify-center mb-8">
            {!logoError ? (
              <div className="logo-container">
                <img 
                  src={feedlLogoUrl} 
                  alt="Feedl" 
                  className="feedl-logo-img" 
                  style={{ transform: 'scale(2)' }} 
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <h1 className="hero-title text-6xl md:text-8xl font-extrabold text-[#3B3030] animate-fade-in-up">
                Feedl
              </h1>
            )}
          </div>
          <h1 className="hero-title text-4xl md:text-6xl font-extrabold tracking-tight text-[#3B3030] mb-6 animate-fade-in-up">
            Your Brand's Creative Feed
          </h1>
          <p className="text-[#5A4A4A] text-lg md:text-xl mt-2 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            Get a full monthly campaign in minutes. <br className="hidden md:block" />
            No agencies. No headaches. Just your brand — consistent, creative, and on-brand, every month.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
            <a href="#inquiry-form" className="btn btn-primary hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl px-8">
              Get Your First Campaign
            </a>
            <a href="#how-it-works" className="btn btn-secondary hover:scale-105 transition-transform duration-200">Know More</a>
          </div>
        </div>
      </section>

      {/* Problem, Solution, Promise Section - In One Line */}
      <section className="container py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Problem Card */}
            <div className="problem-card card-base p-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 mb-4 text-xs font-semibold">
                <span>⚠</span>
                <span>The Problem</span>
              </div>
              <p className="text-[#3B3030] text-base font-bold leading-relaxed mb-3">
                Creating social media content is <span className="text-red-600">time-consuming, inconsistent, and expensive</span>.
              </p>
              <p className="text-[#5A4A4A] text-sm leading-relaxed">
                Most small businesses post irregularly — not because they don't care, but because they don't have time.
              </p>
            </div>

            {/* Solution Card */}
            <div className="solution-card card-base p-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 mb-4 text-xs font-semibold">
                <span>✨</span>
                <span>The Solution</span>
              </div>
              <p className="text-[#3B3030] text-base font-bold leading-relaxed mb-3">
                Feedl gives you a full monthly campaign in minutes.
              </p>
              <p className="text-[#5A4A4A] text-sm leading-relaxed">
                Share your brand details once — we'll generate 5 high-quality posts with captions, ready to post.
              </p>
            </div>

            {/* Promise Card */}
            <div className="promise-card card-base p-6 text-center bg-gradient-to-br from-[color:var(--accent-2)]/50 to-[color:var(--accent-3)]/30 border-2 border-[color:var(--accent-3)]/40">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--accent-3)]/40 border border-[color:var(--accent-4)]/50 text-[#3B3030] mb-4 text-xs font-semibold">
                <span>🎯</span>
                <span>The Promise</span>
              </div>
              <p className="text-[#3B3030] text-base font-bold mb-3 leading-relaxed">
                No agencies. No headaches.
              </p>
              <p className="text-[#5A4A4A] text-sm leading-relaxed">
                Just your brand — <strong className="text-[#3B3030]">consistent, creative, and on-brand</strong>, every month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Infinite Carousel - Paired */}
      <section className="w-full py-12 md:py-16 overflow-hidden bg-gradient-to-b from-transparent via-[#F5EFE4]/25 to-transparent relative">
        <div className="mb-8 text-center">
          <h3 className="section-title text-3xl md:text-4xl text-[#3B3030] mb-3 font-bold">See Feedl in Action</h3>
          <p className="text-[#5A4A4A] text-base md:text-lg font-medium">Real transformations from real brands</p>
        </div>
        
        {/* Gradient overlays for fade effect */}
        <div className="carousel-fade-left"></div>
        <div className="carousel-fade-right"></div>
        
        {/* Paired Before/After Carousel - Moving Left */}
        <div className="carousel-container carousel-hover-pause">
          <div className="carousel-track carousel-track-paired">
            {/* Duplicate set for seamless loop - 4 sets for smoother transition */}
            {[...imagePairs, ...imagePairs, ...imagePairs, ...imagePairs].map((pair, index) => (
              <div key={`pair-${index}`} className="carousel-item-paired">
                <div className="carousel-pair-container">
                  <div className="carousel-pair-image">
                    <div className="carousel-pair-label carousel-pair-label-before">Before</div>
                    <img
                      src={pair.before}
                      alt={`Before transformation ${(index % imagePairs.length) + 1}`}
                      className="carousel-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="carousel-pair-image">
                    <div className="carousel-pair-label carousel-pair-label-after">After</div>
                    <img
                      src={pair.after}
                      alt={`After transformation ${(index % imagePairs.length) + 1}`}
                      className="carousel-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="container py-12 md:py-16">
        <div className="text-center mb-10">
          <h3 className="section-title text-2xl md:text-3xl text-[#3B3030] mb-3 font-bold">How It Works</h3>
          <p className="text-[#5A4A4A] text-sm md:text-base">Get your monthly campaign in three simple steps</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto relative">
          <div className="step-card group card-base p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
            <div className="step-number w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg border-2 border-[color:var(--accent-4)]/50 bg-gradient-to-br from-[color:var(--accent-3)]/40 to-[color:var(--accent-2)]/40 text-[color:var(--accent-5)] shadow-md group-hover:scale-110 group-hover:border-[color:var(--accent-3)] transition-all duration-300">1</div>
            <h4 className="font-bold text-lg text-[#3B3030] mb-3">Share Your Brand</h4>
            <p className="text-[#5A4A4A] text-sm leading-relaxed">Tell us your brand name, overview, logo, and product photos — just once.</p>
          </div>
          <div className="step-card group card-base p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
            <div className="step-number w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg border-2 border-[color:var(--accent-4)]/50 bg-gradient-to-br from-[color:var(--accent-3)]/40 to-[color:var(--accent-2)]/40 text-[color:var(--accent-5)] shadow-md group-hover:scale-110 group-hover:border-[color:var(--accent-3)] transition-all duration-300">2</div>
            <h4 className="font-bold text-lg text-[#3B3030] mb-3">We Generate</h4>
            <p className="text-[#5A4A4A] text-sm leading-relaxed">Feedl creates 5 high-quality posts with captions, ready to post.</p>
          </div>
          <div className="step-card group card-base p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
            <div className="step-number w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg border-2 border-[color:var(--accent-4)]/50 bg-gradient-to-br from-[color:var(--accent-3)]/40 to-[color:var(--accent-2)]/40 text-[color:var(--accent-5)] shadow-md group-hover:scale-110 group-hover:border-[color:var(--accent-3)] transition-all duration-300">3</div>
            <h4 className="font-bold text-lg text-[#3B3030] mb-3">Post & Repeat</h4>
            <p className="text-[#5A4A4A] text-sm leading-relaxed">Download your campaign and get a new one every month — automatically.</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="#inquiry-form" className="btn btn-primary hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl px-8">
            Get Your First Campaign
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

