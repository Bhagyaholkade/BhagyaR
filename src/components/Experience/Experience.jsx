import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section className="experience liquid-core" id="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Career Journey</span>
                    <h2 className="section-title">Internship <br />Experience.</h2>
                </div>

                <div className="experience-timeline">
                    <div className="exp-item glass">
                        <div className="exp-header">
                            <div>
                                <h3 className="exp-role">AI Full Stack Developer</h3>
                                <p className="exp-company"><a href="https://www.gosalesence.com/" target="_blank" rel="noopener noreferrer">Salesence</a></p>
                            </div>
                            <span className="exp-date">Jul '25 — Present</span>
                        </div>
                        <ul className="exp-details">
                            <li>Led end-to-end frontend development of an AI-powered marketplace optimization platform, building a scalable React 18 + TypeScript architecture supporting real-time analytics dashboards.</li>
                            <li>Built modular, reusable UI components using Tailwind CSS, shadcn/ui, and Vite, ensuring responsive design, consistency, and fast iteration cycles.</li>
                            <li>Integrated 15+ RESTful APIs using custom React Hooks and Context API, enabling real-time data rendering for analytics, user management, payments, and AI-generated insights.</li>
                            <li>Implemented internationalization (i18n) using React-i18next, enabling multi-language and multi-region support with dynamic content translation and a scalable UI architecture.</li>
                            <li>Designed and implemented secure authentication flows, including protected routes, session handling, and role-based access control, using React Router v6 and Context API.</li>
                            <li>Collaborated closely with backend engineers to integrate Node.js / Express APIs and Supabase (PostgreSQL) services, managing production deployments on Vercel and Render with performance optimizations.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
