/**
 * FAQ Section - Common questions
 */

import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How does Feedl create content for my brand?",
        answer: "Feedl uses advanced AI to understand your brand's visual identity, tone, and industry. You provide your brand name, logo, and some product photos, and our AI generates unique, on-brand social media posts complete with captions and hashtags."
    },
    {
        question: "What do I get with each campaign?",
        answer: "Each campaign includes 5 high-quality social media posts with custom graphics, captions, and hashtags. All posts are designed to match your brand's colors and style. You can download them as individual images or as a complete ZIP file."
    },
    {
        question: "Can I edit the posts after they're generated?",
        answer: "Absolutely! Every post can be edited directly in Feedl. You can adjust the text, swap images, change colors, and regenerate any post you're not happy with until it's perfect."
    },
    {
        question: "How is this different from Canva or other design tools?",
        answer: "Unlike Canva where you start from scratch, Feedl gives you finished, ready-to-post content in seconds. No design skills needed. We handle the creative thinking and design work-you just approve and post."
    },
    {
        question: "What happens if I run out of credits?",
        answer: "You can upgrade your plan anytime to get more credits. Credits refresh every month on paid plans. We'll notify you when you're running low so you're never caught off guard."
    },
    {
        question: "Is there a contract or commitment?",
        answer: "No contracts, no commitments. All paid plans are month-to-month and you can cancel anytime with one click. We also offer a 14-day money-back guarantee on all paid plans."
    }
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-faq">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label">FAQ</span>
                    <h2 className="section-title-new">
                        Got questions?
                        <br />
                        <span className="title-accent">We've got answers</span>
                    </h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className="faq-icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-contact">
                    <p>Still have questions?</p>
                    <a href="mailto:hello@feedl.xyz" className="faq-contact-link">
                        Contact us at hello@feedl.xyz
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
