/**
 * Who Is This For Section - Target audience personas
 */

import React from 'react';

const audiences = [
    {
        icon: '🛒',
        title: 'E-commerce Brands',
        description: 'Selling products online? Get stunning product posts that convert browsers into buyers.',
        examples: ['Shopify stores', 'Etsy sellers', 'D2C brands']
    },
    {
        icon: '💼',
        title: 'Local Businesses',
        description: 'Restaurants, salons, gyms. Stay visible in your community without spending hours on content.',
        examples: ['Restaurants', 'Salons & Spas', 'Fitness studios']
    },
    {
        icon: '🎯',
        title: 'Coaches & Creators',
        description: 'Build your personal brand with consistent, professional posts that attract clients.',
        examples: ['Life coaches', 'Consultants', 'Course creators']
    },
    {
        icon: '🚀',
        title: 'Startups & SMBs',
        description: "Too busy building your product to post on social? We've got you covered.",
        examples: ['SaaS founders', 'Agencies', 'Service providers']
    }
];

const WhoIsThisFor: React.FC = () => {
    return (
        <section className="section-audience">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label">Perfect For</span>
                    <h2 className="section-title-new">
                        Built for busy business owners
                        <br />
                        <span className="title-accent">who hate creating content</span>
                    </h2>
                </div>

                <div className="audience-grid">
                    {audiences.map((audience) => (
                        <div key={audience.title} className="audience-card">
                            <div className="audience-icon">{audience.icon}</div>
                            <h3 className="audience-title">{audience.title}</h3>
                            <p className="audience-description">{audience.description}</p>
                            <div className="audience-examples">
                                {audience.examples.map((example) => (
                                    <span key={example} className="audience-tag">{example}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoIsThisFor;
