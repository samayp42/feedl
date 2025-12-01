import React, { useState } from 'react';
import MagneticButton from './MagneticButton';
import { supabase } from '../lib/supabase';

const WaitlistForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([{ email }]);

            if (error) throw error;

            setStatus('success');
            setEmail('');
        } catch (error: any) {
            console.error('Error submitting email:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <section id="inquiry-form" className="container py-16 md:py-24 reveal">
            <div className="max-w-3xl mx-auto text-center">
                <div className="mb-8">
                    <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Join the Waitlist
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-neutral-700)' }}>
                        Be the first to experience the future of content creation.
                    </p>
                </div>

                <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, var(--color-neutral-50) 100%)',
                        boxShadow: 'var(--shadow-xl)',
                        border: '1px solid var(--color-neutral-200)'
                    }}>

                    {/* Decorative background elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full"
                            style={{ background: 'radial-gradient(circle, rgba(255, 214, 107, 0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
                        <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 rounded-full"
                            style={{ background: 'radial-gradient(circle, rgba(168, 230, 107, 0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
                    </div>

                    {status === 'success' ? (
                        <div className="relative z-10 py-8 animate-fade-in-up">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                                style={{ background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)', color: '#059669' }}>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>You're on the list!</h3>
                            <p style={{ color: 'var(--color-neutral-700)' }}>We'll be in touch soon with exclusive access.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 text-sm font-semibold hover:underline"
                                style={{ color: 'var(--color-primary)' }}
                            >
                                Add another email
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="relative z-10 max-w-md mx-auto">
                            <div className="flex flex-col gap-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        required
                                        className="w-full px-6 py-4 rounded-full text-lg outline-none transition-all duration-300"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.8)',
                                            border: '2px solid var(--color-neutral-200)',
                                            fontFamily: 'var(--font-body)',
                                            color: 'var(--color-neutral-800)'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--color-neutral-200)'}
                                    />
                                </div>
                                <MagneticButton
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="btn btn-primary w-full flex justify-center items-center"
                                >
                                    {status === 'loading' ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Joining...
                                        </span>
                                    ) : (
                                        'Join Waitlist'
                                    )}
                                </MagneticButton>
                            </div>
                            {status === 'error' && (
                                <p className="mt-2 text-sm text-red-500 text-center">
                                    {errorMessage}
                                </p>
                            )}
                            <p className="mt-4 text-sm opacity-60" style={{ color: 'var(--color-neutral-700)' }}>
                                No spam. Unsubscribe anytime.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default WaitlistForm;
