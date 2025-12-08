import React, { useState, useEffect, useRef } from 'react';
import { portfolioItems } from '../lib/portfolio-data';
import MagneticButton from './MagneticButton';

const PortfolioShowcase: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Auto-scroll carousel
    useEffect(() => {
        if (showAll) return; // Don't scroll if showing grid

        const carousel = carouselRef.current;
        if (!carousel) return;

        let animationFrameId: number;
        const scrollSpeed = 1.5;

        const autoScroll = () => {
            if (!isHovered && carousel) {
                carousel.scrollLeft += scrollSpeed;

                const track = carousel.querySelector('.carousel-track-paired') as HTMLElement;
                if (track) {
                    // We duplicate the items 4 times in the render
                    // So the total width is roughly 4 * (width of one set)
                    // We reset when we've scrolled past the first set
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
    }, [isHovered, showAll]);

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
        <section className="w-full py-12 md:py-16 overflow-hidden relative reveal" style={{ background: 'linear-gradient(to bottom, transparent, rgba(245, 239, 228, 0.25), transparent)' }}>
            <div className="mb-8 text-center px-4">
                <h3 className="section-title text-3xl md:text-4xl mb-3 font-bold">See Feedl in Action</h3>
                <p className="text-base md:text-lg font-medium mb-6" style={{ color: 'var(--color-neutral-700)' }}>Real transformations from real brands</p>

                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={() => setShowAll(false)}
                        className={`px-6 py-2 rounded-full font-bold transition-all ${!showAll ? 'bg-neutral-800 text-white shadow-lg' : 'bg-white text-neutral-600 hover:bg-neutral-100'}`}
                    >
                        Carousel View
                    </button>
                    <button
                        onClick={() => setShowAll(true)}
                        className={`px-6 py-2 rounded-full font-bold transition-all ${showAll ? 'bg-neutral-800 text-white shadow-lg' : 'bg-white text-neutral-600 hover:bg-neutral-100'}`}
                    >
                        View All Work ({portfolioItems.length})
                    </button>
                </div>
            </div>

            {!showAll ? (
                <div className="relative">
                    {/* Gradient overlays for fade effect */}
                    <div className="carousel-fade-left"></div>
                    <div className="carousel-fade-right"></div>

                    {/* Paired Before/After Carousel */}
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
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto px-4 animate-fade-in-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioItems.map((item) => (
                            <div key={item.id} className="group">
                                <div className="carousel-pair-container" style={{ transform: 'none', height: '100%' }}>
                                    <div className="carousel-pair-image mb-4">
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
                                    <div className="mt-4 text-center">
                                        <h4 className="font-bold text-lg">{item.title}</h4>
                                        <p className="text-sm text-neutral-500">{item.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a href="#inquiry-form">
                            <MagneticButton className="btn btn-primary">
                                Get Similar Results
                            </MagneticButton>
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PortfolioShowcase;
