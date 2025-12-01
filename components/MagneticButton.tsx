import React, { useRef, useState } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    strength?: number; // How strong the magnetic pull is
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = '',
    strength = 30,
    ...props
}) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!btnRef.current) return;

        const { left, top, width, height } = btnRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const deltaX = (e.clientX - centerX) / width;
        const deltaY = (e.clientY - centerY) / height;

        setPosition({
            x: deltaX * strength,
            y: deltaY * strength,
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <button
            ref={btnRef}
            className={`transition-transform duration-200 ease-out ${className}`}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </button>
    );
};

export default MagneticButton;
