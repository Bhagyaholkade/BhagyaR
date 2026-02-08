import React, { useState, useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;

            if (isHidden) setIsHidden(false);

            // Immediate position for main dot
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }

            // Delayed position for follower ring (trailing effect)
            if (followerRef.current) {
                followerRef.current.animate({
                    transform: `translate3d(${x}px, ${y}px, 0)`
                }, { duration: 500, fill: 'forwards' });
            }
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable =
                target.closest('button') ||
                target.closest('a') ||
                target.closest('.project-card') ||
                target.closest('.magnetic-next-scroller') ||
                window.getComputedStyle(target).cursor === 'pointer';

            if (isClickable) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseOut = () => {
            setIsHidden(true);
        };

        const handleMouseIn = () => {
            setIsHidden(false);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseOut);
        document.addEventListener('mouseenter', handleMouseIn);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseOut);
            document.removeEventListener('mouseenter', handleMouseIn);
        };
    }, [isHidden]);

    return (
        <>
            <div
                ref={cursorRef}
                className={`custom-cursor-dot ${isHovering ? 'hover' : ''} ${isHidden ? 'hidden' : ''}`}
            />
            <div
                ref={followerRef}
                className={`custom-cursor-follower ${isHovering ? 'hover' : ''} ${isHidden ? 'hidden' : ''}`}
            >
                <div className="inner-ring" />
            </div>
        </>
    );
};

export default CustomCursor;
