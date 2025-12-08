/**
 * Fixed Navigation Bar
 * Updated: Direct link to tool
 */

import React, { useState, useEffect } from 'react';

const TOOL_URL = 'https://feedlmain.vercel.app'; // Main tool URL

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Results', href: '#results' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <a href="#" className="navbar-logo">
                    Feedl
                </a>

                {/* Desktop Navigation */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="navbar-link">
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <a href={TOOL_URL} className="navbar-cta" target="_blank" rel="noopener noreferrer">
                    Try Free
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="navbar-mobile-link"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}
                <a href={TOOL_URL} className="navbar-mobile-cta" target="_blank" rel="noopener noreferrer">
                    Try Free - 50 Credits
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
