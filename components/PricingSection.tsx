/**
 * Pricing Section - Updated with direct tool links
 */

import React, { useState } from 'react';

const TOOL_URL = 'https://feedlmain.vercel.app'; // Main tool URL

interface PricingTier {
    id: string;
    name: string;
    priceUSD: number;
    priceINR: number;
    description: string;
    credits: number;
    features: string[];
    cta: string;
    popular?: boolean;
}

const pricingTiers: PricingTier[] = [
    {
        id: 'free',
        name: 'Free',
        priceUSD: 0,
        priceINR: 0,
        description: 'Try Feedl with no commitment',
        credits: 50,
        features: [
            '50 free credits',
            '1 full campaign',
            'All AI features',
            'Download as ZIP',
            'Email support'
        ],
        cta: 'Start Free'
    },
    {
        id: 'starter',
        name: 'Starter',
        priceUSD: 29,
        priceINR: 899,
        description: 'Perfect for small businesses',
        credits: 500,
        features: [
            '500 credits/month',
            '~10 campaigns/month',
            'Priority generation',
            'No watermarks',
            'Email support'
        ],
        cta: 'Get Started',
        popular: true
    },
    {
        id: 'agency',
        name: 'Agency',
        priceUSD: 79,
        priceINR: 2499,
        description: 'For agencies & power users',
        credits: 2000,
        features: [
            '2,000 credits/month',
            '~40 campaigns/month',
            'Multi-brand support',
            'White-label exports',
            'Priority support'
        ],
        cta: 'Get Started'
    }
];

const PricingSection: React.FC = () => {
    const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

    const formatPrice = (tier: PricingTier) => {
        if (tier.priceUSD === 0) return 'Free';
        const price = currency === 'INR' ? tier.priceINR : tier.priceUSD;
        const symbol = currency === 'INR' ? '₹' : '$';
        return `${symbol}${price.toLocaleString()}`;
    };

    return (
        <section id="pricing" className="section-pricing">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label section-label-highlight">Early Bird Pricing</span>
                    <h2 className="section-title-new">
                        Simple pricing,
                        <br />
                        <span className="title-accent">no surprises</span>
                    </h2>
                    <p className="section-subtitle">
                        Start free with 50 credits. Upgrade when you need more.
                    </p>
                </div>

                {/* Currency Toggle */}
                <div className="pricing-toggle">
                    <button
                        className={`pricing-toggle-btn ${currency === 'USD' ? 'active' : ''}`}
                        onClick={() => setCurrency('USD')}
                    >
                        🌎 USD
                    </button>
                    <button
                        className={`pricing-toggle-btn ${currency === 'INR' ? 'active' : ''}`}
                        onClick={() => setCurrency('INR')}
                    >
                        🇮🇳 INR
                    </button>
                </div>

                <div className="pricing-grid">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`pricing-card ${tier.popular ? 'pricing-card-popular' : ''}`}
                        >
                            {tier.popular && (
                                <div className="pricing-popular-badge">Most Popular</div>
                            )}

                            <div className="pricing-header">
                                <h3 className="pricing-name">{tier.name}</h3>
                                <p className="pricing-description">{tier.description}</p>
                            </div>

                            <div className="pricing-price">
                                <span className="pricing-amount">{formatPrice(tier)}</span>
                                {tier.priceUSD > 0 && <span className="pricing-period">/month</span>}
                            </div>

                            <div className="pricing-credits">
                                {tier.credits.toLocaleString()} credits
                                {tier.id !== 'free' && ' per month'}
                            </div>

                            <ul className="pricing-features">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="pricing-feature">
                                        <svg className="pricing-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={TOOL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`pricing-cta ${tier.popular ? 'pricing-cta-primary' : ''}`}
                            >
                                {tier.cta}
                            </a>
                        </div>
                    ))}
                </div>

                <div className="pricing-footer">
                    <p>🔒 All plans come with a 14-day money-back guarantee. No questions asked.</p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
