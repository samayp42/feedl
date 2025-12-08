/**
 * Hero Section - Product-focused with animated workflow visualization
 * Shows how Feedl transforms raw photos into beautiful social posts
 */

import React from 'react';
import HeroAnimation from './HeroAnimation';

const TOOL_URL = 'https://feedlmain.vercel.app'; // Main tool URL

const HeroSection: React.FC = () => {
    return (
        <section className="hero-new">
            <div className="hero-new-container">
                {/* Left Column - Content */}
                <div className="hero-new-content">
                    <div className="hero-new-badge">
                        <span className="hero-badge-dot"></span>
                        <span>AI-Powered Content Creation</span>
                    </div>

                    <h1 className="hero-new-title">
                        Your entire month of content,
                        <span className="hero-title-accent"> sorted in minutes.</span>
                    </h1>

                    <p className="hero-new-subtitle">
                        Stop stressing about social media. Feedl creates beautiful, on-brand posts for your business in seconds. No design skills needed.
                    </p>

                    <div className="hero-new-cta-group">
                        <a href={TOOL_URL} className="btn-primary-new" target="_blank" rel="noopener noreferrer">
                            Try Free - 50 Credits
                            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#how-it-works" className="btn-secondary-new">
                            See How It Works
                        </a>
                    </div>

                    <div className="hero-new-trust">
                        <div className="hero-trust-item">
                            <svg className="hero-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                            <span>No credit card required</span>
                        </div>
                        <div className="hero-trust-item">
                            <svg className="hero-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                            <span>50 free credits to start</span>
                        </div>
                    </div>
                </div>

                {/* Right Column - Animated Workflow Visualization */}
                <div className="hero-new-visual">
                    <div className="hero-demo-frame">
                        <HeroAnimation />
                    </div>
                </div>
            </div>

            {/* Background gradient */}
            <div className="hero-bg-gradient" aria-hidden="true"></div>
        </section>
    );
};

export default HeroSection;
