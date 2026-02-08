import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-page" id="contact">
            {/* Background Massive Watermark */}
            <div className="contact-watermark-bg">CONTACT</div>

            <div className="container">
                <div className="contact-main-grid">
                    {/* Brand/Title Column */}
                    <div className="contact-hero-content animate-slide-up">
                        <div className="section-header-zenith">
                            <span className="zenith-tag">06 — GET IN TOUCH</span>
                            <h2 className="zenith-editorial-title">
                                <span className="word-white">GET</span>
                                <span className="word-stroke">IN</span>
                                <span className="word-gradient">TOUCH</span>
                            </h2>
                        </div>

                        <div className="contact-personal-info">
                            <div className="contact-footer-line">
                                <a href="https://www.linkedin.com/in/bhagya-holkade/" target="_blank" rel="noopener noreferrer" className="social-link-zenith">LINKEDIN</a>
                                <a href="https://github.com/Bhagyaholkade" target="_blank" rel="noopener noreferrer" className="social-link-zenith">GITHUB</a>
                                <span className="footer-email">holkadebhagya@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Interaction/Form Column */}
                    <div className="contact-interaction-area animate-slide-up delay-1">
                        <div className="form-zenith-card">
                            <div className="card-inner-glow"></div>
                            {/* Added "Get In Touch" heading inside card for visibility */}
                            <h3 className="form-heading-mini">GET IN TOUCH</h3>
                            <form className="zenith-form-final">
                                <div className="form-row">
                                    <div className="form-group-zenith">
                                        <label>FULL NAME</label>
                                        <input type="text" placeholder="John Doe" required />
                                        <div className="line-indicator"></div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group-zenith">
                                        <label>EMAIL ADDRESS</label>
                                        <input type="email" placeholder="john@example.com" required />
                                        <div className="line-indicator"></div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group-zenith">
                                        <label>MESSAGE</label>
                                        <textarea rows="4" placeholder="Briefly describe your vision..." required></textarea>
                                        <div className="line-indicator"></div>
                                    </div>
                                </div>
                                <button type="submit" className="zenith-btn-submit">
                                    <span className="btn-text">SEND MESSAGE</span>
                                    <span className="btn-icon-wrap">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aesthetic Fine Noise */}
            <div className="zenith-noise-overlay"></div>
        </section>
    );
};

export default Contact;
