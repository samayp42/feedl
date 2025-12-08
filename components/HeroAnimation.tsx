/**
 * HeroAnimation - Premium cinematic visualization of the Feedl AI workflow
 * Features: 3D perspective, glassmorphism, dynamic particles, orchestrated motion
 */

import React from 'react';

const HeroAnimation: React.FC = () => {
    return (
        <div className="hero-anim-premium">
            {/* Ambient background effects */}
            <div className="anim-ambient">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="ambient-orb orb-3"></div>
                <div className="ambient-grid"></div>
            </div>

            {/* Main 3D stage with perspective */}
            <div className="anim-stage-3d">

                {/* Input Section - Photo Cards with 3D tilt */}
                <div className="anim-input-section">
                    <div className="input-card-stack">
                        <div className="input-card card-1">
                            <div className="card-inner">
                                <div className="card-image">
                                    <div className="image-placeholder">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <rect x="3" y="3" width="18" height="18" rx="2" />
                                            <circle cx="8.5" cy="8.5" r="1.5" />
                                            <path d="M21 15l-5-5L5 21" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-shine"></div>
                            </div>
                        </div>
                        <div className="input-card card-2">
                            <div className="card-inner">
                                <div className="card-image">
                                    <div className="image-placeholder">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                                            <circle cx="12" cy="13" r="4" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-shine"></div>
                            </div>
                        </div>
                        <div className="input-card card-3">
                            <div className="card-inner">
                                <div className="card-image">
                                    <div className="image-placeholder">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-shine"></div>
                            </div>
                        </div>
                    </div>
                    <div className="section-label-anim">
                        <span className="label-dot"></span>
                        Your Media
                    </div>
                </div>

                {/* Energy Stream - Left */}
                <div className="energy-stream stream-left">
                    <div className="stream-particle sp-1"></div>
                    <div className="stream-particle sp-2"></div>
                    <div className="stream-particle sp-3"></div>
                    <svg className="stream-line" viewBox="0 0 80 40">
                        <path d="M0,20 Q40,20 80,20" fill="none" stroke="url(#streamGradient)" strokeWidth="2" />
                        <defs>
                            <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(121,87,87,0.1)" />
                                <stop offset="50%" stopColor="rgba(121,87,87,0.6)" />
                                <stop offset="100%" stopColor="rgba(121,87,87,0.1)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* AI Neural Core */}
                <div className="neural-core">
                    {/* Outer glow rings */}
                    <div className="core-glow-ring ring-outer"></div>
                    <div className="core-glow-ring ring-mid"></div>
                    <div className="core-glow-ring ring-inner"></div>

                    {/* Rotating energy rings */}
                    <div className="core-orbit orbit-1">
                        <div className="orbit-dot"></div>
                    </div>
                    <div className="core-orbit orbit-2">
                        <div className="orbit-dot"></div>
                    </div>
                    <div className="core-orbit orbit-3">
                        <div className="orbit-dot"></div>
                    </div>

                    {/* Center nucleus */}
                    <div className="core-nucleus">
                        <div className="nucleus-glass">
                            <div className="nucleus-icon feedl-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M6 4h12M6 4v16M6 12h8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="nucleus-label">Feedl</span>
                        </div>
                        <div className="nucleus-pulse"></div>
                    </div>

                    {/* Floating particles */}
                    <div className="neural-particle np-1"></div>
                    <div className="neural-particle np-2"></div>
                    <div className="neural-particle np-3"></div>
                    <div className="neural-particle np-4"></div>
                    <div className="neural-particle np-5"></div>
                    <div className="neural-particle np-6"></div>
                    <div className="neural-particle np-7"></div>
                    <div className="neural-particle np-8"></div>
                </div>

                {/* Energy Stream - Right */}
                <div className="energy-stream stream-right">
                    <div className="stream-particle sp-1"></div>
                    <div className="stream-particle sp-2"></div>
                    <div className="stream-particle sp-3"></div>
                    <svg className="stream-line" viewBox="0 0 80 40">
                        <path d="M0,20 Q40,20 80,20" fill="none" stroke="url(#streamGradient)" strokeWidth="2" />
                    </svg>
                </div>

                {/* Output Section - Polished Social Cards */}
                <div className="anim-output-section">
                    <div className="output-card-cascade">
                        <div className="output-card ocard-1">
                            <div className="ocard-inner">
                                <div className="ocard-header">
                                    <div className="platform-icon instagram">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ocard-preview">
                                    <div className="preview-gradient grad-1"></div>
                                </div>
                                <div className="ocard-content">
                                    <div className="content-line"></div>
                                    <div className="content-line short"></div>
                                    <div className="ocard-engagement">
                                        <span className="eng-icon">❤️</span>
                                        <span className="eng-icon">💬</span>
                                        <span className="eng-icon">📤</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ocard-glow"></div>
                        </div>

                        <div className="output-card ocard-2">
                            <div className="ocard-inner">
                                <div className="ocard-header">
                                    <div className="platform-icon linkedin">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ocard-preview">
                                    <div className="preview-gradient grad-2"></div>
                                </div>
                                <div className="ocard-content">
                                    <div className="content-line"></div>
                                    <div className="content-line short"></div>
                                    <div className="ocard-engagement">
                                        <span className="eng-icon">👍</span>
                                        <span className="eng-icon">💡</span>
                                        <span className="eng-icon">🔄</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ocard-glow"></div>
                        </div>

                        <div className="output-card ocard-3">
                            <div className="ocard-inner">
                                <div className="ocard-header">
                                    <div className="platform-icon twitter">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ocard-preview">
                                    <div className="preview-gradient grad-3"></div>
                                </div>
                                <div className="ocard-content">
                                    <div className="content-line"></div>
                                    <div className="content-line short"></div>
                                    <div className="ocard-engagement">
                                        <span className="eng-icon">🔁</span>
                                        <span className="eng-icon">❤️</span>
                                        <span className="eng-icon">📊</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ocard-glow"></div>
                        </div>
                    </div>
                    <div className="section-label-anim">
                        <span className="label-dot pulse"></span>
                        Ready to Post
                    </div>
                </div>
            </div>

            {/* Bottom Progress Indicator */}
            <div className="anim-progress-bar">
                <div className="progress-step step-active">
                    <div className="pstep-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                    </div>
                    <span>Upload</span>
                    <div className="pstep-glow"></div>
                </div>
                <div className="progress-connector">
                    <div className="connector-fill"></div>
                </div>
                <div className="progress-step step-active">
                    <div className="pstep-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                    </div>
                    <span>Generate</span>
                    <div className="pstep-glow"></div>
                </div>
                <div className="progress-connector">
                    <div className="connector-fill"></div>
                </div>
                <div className="progress-step step-active">
                    <div className="pstep-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </div>
                    <span>Download</span>
                    <div className="pstep-glow"></div>
                </div>
            </div>
        </div>
    );
};

export default HeroAnimation;
