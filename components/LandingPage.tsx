/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Preload all images for smooth carousel
  useEffect(() => {
    imagePairs.forEach(pair => {
      const beforeImg = new Image();
      beforeImg.src = pair.before;
      const afterImg = new Image();
      afterImg.src = pair.after;
    });
  }, []);

  // Auto-scroll carousel with increased speed
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId: number;
    const scrollSpeed = 1.5;

    const autoScroll = () => {
      if (!isHovered && carousel) {
        carousel.scrollLeft += scrollSpeed;

        const track = carousel.querySelector('.carousel-track-paired') as HTMLElement;
        if (track) {
          const singleSetWidth = track.scrollWidth / 4;

          if (carousel.scrollLeft >= singleSetWidth) {
            carousel.scrollLeft = 0;
          }
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);


  return (
    <div className="w-full landing-root min-h-screen relative">
      {/* Hero Section with Stunning Animations */}
      <section className="hero-section">
        {/* Animated Background Orbs */}
        <div className="hero-orbs" aria-hidden="true">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        <div className="container relative z-10">
          {/* Floating Creative Elements */}
          <div className="floating-decor" aria-hidden="true">
            <div className="float-item float-item-1">Aa</div>
            <div className="float-item float-item-2">#FFD66B</div>
            <div className="float-item float-item-3">Creative</div>
            <div className="float-item float-item-4">Design</div>
          </div>

          {/* Logo with 3D Animation & Particles */}
          <div className="relative w-full flex items-center justify-center mb-8">
            {!logoError ? (
              <div className="logo-container">
                {/* Morphing Glow Background */}
                <div className="logo-glow" aria-hidden="true"></div>

                {/* Particle System */}
                <div className="logo-particles" aria-hidden="true">
                  <div className="particle particle-1"></div>
                  <div className="particle particle-2"></div>
                  <div className="particle particle-3"></div>
                  <div className="particle particle-4"></div>
                  <div className="particle particle-5"></div>
                  <div className="particle particle-6"></div>
                </div>

                {/* Logo Image with Float Animation */}
                <div className="logo-wrapper">
                  <img
                    src={feedlLogoUrl}
                    alt="Feedl"
                    className="feedl-logo-img"
                    onError={() => setLogoError(true)}
                  />
                </div>
              </div>
            ) : (
              <h1 className="hero-title text-6xl md:text-8xl font-extrabold animate-fade-in-up">
                Feedl
              </h1>
            )}
          </div>

          <h1 className="hero-title text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-6 animate-fade-in-up">
            Your Brand's Creative Feed
          </h1>

          <p className="text-center text-lg md:text-xl mt-2 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100" style={{ color: 'var(--color-neutral-700)' }}>
            Get a full monthly campaign in minutes. <br className="hidden md:block" />
            No agencies. No headaches. Just your brand — <span className="accent-text">consistent, creative, and on-brand</span>, every month.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
            <a href="#inquiry-form" className="btn btn-primary">
              Get Your First Campaign
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              Know More
            </a>
          </div>
        </div>
      </section>

      {/* Problem, Solution, Promise Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Feedl?
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-neutral-700)' }}>
              We solve the content creation problem that every small business faces
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Problem Card */}
            <div className="value-card value-card-problem">
              <div className="value-card-badge value-card-badge-problem">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>The Problem</span>
              </div>
              <div className="value-card-icon value-card-icon-problem">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="value-card-title">Content Creation is Hard</h3>
              <p className="value-card-description">
                Creating social media content is <strong style={{ color: '#DC2626' }}>time-consuming, inconsistent, and expensive</strong>. Most small businesses post irregularly — not because they don't care, but because they don't have time.
              </p>
            </div>

            {/* Solution Card */}
            <div className="value-card value-card-solution">
              <div className="value-card-badge value-card-badge-solution">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>The Solution</span>
              </div>
              <div className="value-card-icon value-card-icon-solution">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="value-card-title">Full Campaign in Minutes</h3>
              <p className="value-card-description">
                Feedl gives you a <strong style={{ color: '#059669' }}>full monthly campaign in minutes</strong>. Share your brand details once — we'll generate 5 high-quality posts with captions, ready to post.
              </p>
            </div>

            {/* Promise Card */}
            <div className="value-card value-card-promise">
              <div className="value-card-badge value-card-badge-promise">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>The Promise</span>
              </div>
              <div className="value-card-icon value-card-icon-promise">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="value-card-title">No Agencies. No Headaches.</h3>
              <p className="value-card-description">
                Just your brand — <strong style={{ color: 'var(--color-primary)' }}>consistent, creative, and on-brand</strong>, every month. No contracts, no meetings, no hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Infinite Carousel */}
      <section className="w-full py-12 md:py-16 overflow-hidden relative" style={{ background: 'linear-gradient(to bottom, transparent, rgba(245, 239, 228, 0.25), transparent)' }}>
        <div className="mb-8 text-center">
          <h3 className="section-title text-3xl md:text-4xl mb-3 font-bold">See Feedl in Action</h3>
          <p className="text-base md:text-lg font-medium" style={{ color: 'var(--color-neutral-700)' }}>Real transformations from real brands</p>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="carousel-fade-left"></div>
        <div className="carousel-fade-right"></div>

        {/* Paired Before/After Carousel */}
        <div
          ref={carouselRef}
          className="carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="carousel-track carousel-track-paired">
            {/* Duplicate set for seamless loop */}
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
      <section id="how-it-works" className="container py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="section-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4">How It Works</h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-neutral-700)' }}>Get your monthly campaign in three simple steps</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            <div className="step-card-modern group relative">
              <div className="step-number-modern">
                <span className="step-number-text">1</span>
              </div>
              <div className="step-icon-wrapper">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h4 className="step-title">Share Your Brand</h4>
              <p className="step-description">Tell us your brand name, overview, logo, and product photos — just once. That's all we need.</p>
            </div>

            <div className="step-card-modern group relative">
              <div className="step-number-modern">
                <span className="step-number-text">2</span>
              </div>
              <div className="step-icon-wrapper">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="step-title">We Generate</h4>
              <p className="step-description">Feedl's AI creates 5 high-quality posts with captions, perfectly tailored to your brand. Ready to post.</p>
            </div>

            <div className="step-card-modern group relative">
              <div className="step-number-modern">
                <span className="step-number-text">3</span>
              </div>
              <div className="step-icon-wrapper">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="step-title">Post & Repeat</h4>
              <p className="step-description">Download your campaign and get a fresh one every month — automatically. Set it and forget it.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a href="#inquiry-form" className="btn btn-primary">
            Get Your First Campaign
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
