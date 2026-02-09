import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const container = document.querySelector('.horizontal-container');
        if (!container) return;

        const handleScroll = () => {
            setScrolled(container.scrollLeft > 100);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (index) => {
        const container = document.querySelector('.horizontal-container');
        if (container) {
            container.scrollTo({
                left: window.innerWidth * index,
                behavior: 'smooth'
            });
            setMenuOpen(false);
        }
    };

    return (
        <>
            <nav className={`navbar minimalist ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`}>
                <div className="nav-container">
                    <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection(0); }}>
                        BHAGYA<span className="dot">.</span>
                    </a>

                    <div className="nav-menu-trigger" onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="menu-text-wrap">
                            <span className={menuOpen ? 'hidden' : ''}>MENU</span>
                            <span className={menuOpen ? '' : 'hidden'}>CLOSE</span>
                        </div>
                        <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`zenith-menu-overlay ${menuOpen ? 'active' : ''}`}>
                <div className="menu-noise"></div>
                <div className="menu-content">
                    <div className="menu-links">
                        {[
                            { label: "Home", sub: "01", index: 0 },
                            { label: "About", sub: "02", index: 1 },
                            { label: "Experience", sub: "03", index: 2 },
                            { label: "Projects", sub: "04", index: 3 },
                            { label: "Skills", sub: "05", index: 4 },
                            { label: "Contact", sub: "06", index: 5 }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="menu-link-item"
                                onClick={() => scrollToSection(item.index)}
                                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                            >
                                <span className="menu-sub">{item.sub}</span>
                                <span className="menu-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="menu-footer">
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/bhagya-holkade/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                            <a href="https://github.com/Bhagyaholkade" target="_blank" rel="noopener noreferrer">GITHUB</a>
                            <a href="mailto:holkadebhagya@gmail.com">EMAIL</a>
                        </div>
                        <div className="menu-meta">
                            <span>BHAGYA — 2026 EDITION</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
