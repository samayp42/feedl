/**
 * Portfolio Showcase - Before/After carousel
 * Updated: Direct link to tool
 */

import React, { useState, useEffect, useRef } from 'react';
import { portfolioItems } from '../lib/portfolio-data';

const TOOL_URL = 'https://feedlmain.vercel.app'; // Main tool URL

const PortfolioShowcase: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Auto-scroll carousel
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let animationFrameId: number;
        const scrollSpeed = 1;

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

    // Preload images
    useEffect(() => {
        portfolioItems.forEach(item => {
            const beforeImg = new Image();
            beforeImg.src = item.before;
            const afterImg = new Image();
            afterImg.src = item.after;
        });
    }, []);

    return (
        <section id="results" className="section-portfolio">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label">Real Results</span>
                    <h2 className="section-title-new">
                        See what Feedl creates
                        <br />
                        <span className="title-accent">for businesses like yours</span>
                    </h2>
                </div>
            </div>

            <div className="portfolio-carousel-wrapper">
                {/* Gradient overlays for fade effect */}
                <div className="carousel-fade-left"></div>
                <div className="carousel-fade-right"></div>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    className="carousel-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                >
                    <div className="carousel-track carousel-track-paired">
                        {/* Duplicate set for seamless loop (4x) */}
                        {[...portfolioItems, ...portfolioItems, ...portfolioItems, ...portfolioItems].map((item, index) => (
                            <div key={`pair-${index}`} className="carousel-item-paired">
                                <div className="carousel-pair-container">
                                    <div className="carousel-pair-image">
                                        <div className="carousel-pair-label carousel-pair-label-before">Before</div>
                                        <img
                                            src={item.before}
                                            alt={`Before ${item.title}`}
                                            className="carousel-image"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="carousel-pair-image">
                                        <div className="carousel-pair-label carousel-pair-label-after">After</div>
                                        <img
                                            src={item.after}
                                            alt={`After ${item.title}`}
                                            className="carousel-image"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="carousel-item-info">
                                        <span className="carousel-item-title">{item.title}</span>
                                        <span className="carousel-item-category">{item.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="portfolio-cta">
                <a href={TOOL_URL} className="btn-primary-new" target="_blank" rel="noopener noreferrer">
                    Get Results Like These
                    <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default PortfolioShowcase;
