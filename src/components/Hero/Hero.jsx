import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToNext = () => {
        const container = document.querySelector('.horizontal-container');
        if (container) {
            const nextX = container.scrollLeft + window.innerWidth;
            const maxScroll = container.scrollWidth - window.innerWidth;

            container.scrollTo({
                left: nextX > maxScroll ? 0 : nextX,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="zenith-hero">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="zenith-video"
            >
                <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>

            <div className="zenith-content">
                <h1 className="zenith-massive-title animate-slide-up">
                    <div className="title-row">SOFTWARE</div>
                    <div className="title-row outline">DEVELOPER.</div>
                    <div className="title-row">DATA ANALYTICS</div>
                </h1>

                <div className="zenith-meta-bottom animate-fade-in delay-2">
                    <div className="magnetic-next-scroller" onClick={scrollToNext}>
                        <div className="magnetic-core">
                            <div className="inner-glow"></div>
                            <div className="core-dot"></div>
                            <svg className="magnetic-text-svg" viewBox="0 0 100 100">
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                                <text className="rotating-text">
                                    <textPath href="#circlePath">SCROLL • TO • DISCOVER • </textPath>
                                </text>
                            </svg>
                            <div className="energy-rings">
                                <div className="ring-inner"></div>
                                <div className="ring-outer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="zenith-marquee-wrapper animate-fade-in delay-3">
                <div className="zenith-marquee">
                    <span>EXPLORE PROJECTS — VIEW EXPERIENCE — DIGITAL ARCHITECTURE — AI INNOVATION — VISUAL DESIGN — </span>
                    <span>EXPLORE PROJECTS — VIEW EXPERIENCE — DIGITAL ARCHITECTURE — AI INNOVATION — VISUAL DESIGN — </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
