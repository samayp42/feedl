import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const moveCursor = (e: MouseEvent) => {
            // Main cursor moves instantly
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

            // Follower moves with a slight delay (using requestAnimationFrame for smoothness would be ideal, 
            // but CSS transition on transform handles the "lag" feel well for this simple implementation)
            follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-[#3B3030] rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-transform duration-0"
                style={{ marginTop: '-6px', marginLeft: '-6px' }} // Center adjustment
            />
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 w-8 h-8 border border-[#3B3030] rounded-full pointer-events-none z-[9998] mix-blend-difference transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2 ${isHovering ? 'scale-150 bg-[#3B3030] bg-opacity-10 border-transparent' : 'scale-100'}`}
                style={{ marginTop: '-16px', marginLeft: '-16px' }} // Center adjustment
            />
        </>
    );
};

export default CustomCursor;
