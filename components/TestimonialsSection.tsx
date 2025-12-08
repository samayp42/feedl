/**
 * Testimonials Section - Beta user feedback
 */

import React from 'react';

const testimonials = [
    {
        id: 1,
        quote: "I used to spend 5+ hours every week creating Instagram posts. Now I get a month's worth of content in literally 5 minutes. Game changer for my bakery business.",
        author: "Priya Sharma",
        role: "Owner, The Sweet Spot Bakery",
        avatar: "PS",
        rating: 5
    },
    {
        id: 2,
        quote: "As a solo founder, I couldn't afford an agency and didn't have time to learn design. Feedl gives me professional-looking posts that actually match my brand. My engagement has doubled!",
        author: "Rahul Mehta",
        role: "Founder, FitLife Coaching",
        avatar: "RM",
        rating: 5
    },
    {
        id: 3,
        quote: "We manage social media for 12 local restaurants. Feedl cut our content creation time by 80%. Our clients love the quality and we love the efficiency.",
        author: "Ananya Patel",
        role: "CEO, Starter Digital Agency",
        avatar: "AP",
        rating: 5
    },
    {
        id: 4,
        quote: "Finally, a tool that actually understands our brand voice. The AI doesn't just create generic content-it feels like it knows our clothing line.",
        author: "Vikram Singh",
        role: "Co-founder, Urban Thread Co.",
        avatar: "VS",
        rating: 5
    }
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="section-testimonials">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label">Early Users Love Us</span>
                    <h2 className="section-title-new">
                        Don't take our word for it
                    </h2>
                    <p className="section-subtitle">
                        Here's what our beta users are saying
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="testimonial-star" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="testimonial-quote">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">
                                    {testimonial.avatar}
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-name">{testimonial.author}</div>
                                    <div className="testimonial-role">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
