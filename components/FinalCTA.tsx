/**
 * Final CTA Section - Simple link to tool
 * Updated: No more email form, direct link instead
 */

import React from 'react';

const TOOL_URL = 'https://feedlmain.vercel.app'; // Main tool URL

const FinalCTA: React.FC = () => {
    return (
        <section id="get-started" className="section-final-cta">
            <div className="section-container">
                <div className="final-cta-content">
                    <h2 className="final-cta-title">
                        Ready to stop stressing
                        <br />
                        <span className="title-accent">about content?</span>
                    </h2>
                    <p className="final-cta-subtitle">
                        Join hundreds of businesses creating stunning content with AI.
                        Start with 50 free credits, no credit card required.
                    </p>

                    <div className="final-cta-buttons">
                        <a
                            href={TOOL_URL}
                            className="btn-primary-large"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Start Creating For Free
                            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <div className="final-cta-features">
                        <div className="final-cta-feature">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                            <span>50 free credits</span>
                        </div>
                        <div className="final-cta-feature">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                            <span>No credit card</span>
                        </div>
                        <div className="final-cta-feature">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Create in 60 seconds</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="final-cta-bg" aria-hidden="true">
                <div className="final-cta-orb final-cta-orb-1"></div>
                <div className="final-cta-orb final-cta-orb-2"></div>
            </div>
        </section>
    );
};

export default FinalCTA;
