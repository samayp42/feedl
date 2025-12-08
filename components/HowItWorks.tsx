/**
 * How It Works Section - Simplified 3-step process
 * Updated: Direct link to tool
 */

import React from 'react';

const TOOL_URL = 'https://feedlmain.vercel.app'; // Main tool URL

const steps = [
    {
        number: '01',
        title: 'Share Your Brand',
        description: 'Tell us your brand name, upload your logo and a few product photos. Takes less than 2 minutes.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
        )
    },
    {
        number: '02',
        title: 'AI Creates Your Campaign',
        description: 'Our AI understands your brand and generates 5 unique, on-brand posts with captions ready to go.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        number: '03',
        title: 'Download & Post',
        description: 'Review, edit if needed, and download your campaign. Schedule or post directly to your socials.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        )
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="section-how-it-works">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label">Simple Process</span>
                    <h2 className="section-title-new">
                        From zero to a full month of content
                        <br />
                        <span className="title-accent">in under 5 minutes</span>
                    </h2>
                </div>

                <div className="how-steps">
                    {steps.map((step, index) => (
                        <div key={step.number} className="how-step">
                            <div className="how-step-number">{step.number}</div>
                            <div className="how-step-icon">
                                {step.icon}
                            </div>
                            <h3 className="how-step-title">{step.title}</h3>
                            <p className="how-step-description">{step.description}</p>

                            {index < steps.length - 1 && (
                                <div className="how-step-connector" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="how-cta">
                    <a href={TOOL_URL} className="btn-primary-new" target="_blank" rel="noopener noreferrer">
                        Try It Free Now
                        <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
