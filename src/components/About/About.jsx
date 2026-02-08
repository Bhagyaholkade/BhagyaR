import React from 'react';
import './About.css';

const About = () => {
    const education = [
        { year: "2021 - 2025", degree: "B.E. in Information Science Engineering", school: "MVJ College of Engineering", gpa: "GPA: 8" },
        { year: "2018 - 2020", degree: "PU College", school: "SLV PU College", gpa: "GPA: 76%" },
        { year: "2017 - 2018", degree: "High School", school: "Basaveshwara School", gpa: "GPA: 79%" }
    ];

    const resumes = [
        {
            role: "Master Resume",
            description: "Complete professional overview",
            file: "/resume/BhagyaR.pdf",
            icon: "🏆"
        },
        {
            role: "Frontend Developer",
            description: "React, UI/UX, & Animations",
            file: "/resume/Bhagya-FD.pdf",
            icon: "🎨"
        },
        {
            role: "Backend Developer",
            description: "Node.js, Databases, & APIs",
            file: "/resume/Bhagya(Backend-dev).pdf",
            icon: "⚙️"
        },
        {
            role: "Data Analyst",
            description: "Python, SQL, & Visualizations",
            file: "/resume/Bhagya-DataAnalysis.pdf",
            icon: "📊"
        },
        {
            role: "QA Engineer",
            description: "Testing, Automation, & Quality",
            file: "/resume/Bhagya(QA-resume).pdf",
            icon: "🛡️"
        }
    ];

    return (
        <section className="about" id="about">
            <div className="container">
                {/* About Me Section with Photo */}
                <div className="about-me-section">
                    <div className="about-me-content">
                        <div className="about-me-text">
                            <div className="text-header">
                                <span className="section-subtitle primary-subtitle underline-animate">Who I Am</span>
                                <h2 className="section-title">About Me.</h2>
                            </div>
                            <p className="about-description">
                                I'm <strong>Bhagya</strong>, a passionate Software Developer and Data Analytics enthusiast based in Bangalore.
                                As a Software Developer with 7+ months of professional experience and a B.E. in Information Science Engineering, I specialize in building innovative,
                                user-centric applications that solve real-world problems.
                            </p>
                            <p className="about-description">
                                My expertise spans full-stack development, AI/ML integration, and data-driven solutions.
                                I thrive on creating seamless digital experiences and am always eager to learn cutting-edge technologies.
                            </p>
                            <div className="about-stats">
                                <div className="stat-item glass-premium">
                                    <div className="stat-icon-blob"></div>
                                    <span className="stat-number">7+</span>
                                    <span className="stat-label">Months Experience</span>
                                </div>
                                <div className="stat-item glass-premium">
                                    <div className="stat-icon-blob"></div>
                                    <span className="stat-number">10+</span>
                                    <span className="stat-label">Projects Built</span>
                                </div>
                                <div className="stat-item glass-premium">
                                    <div className="stat-icon-blob"></div>
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Dedication</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-me-photo">
                            <div className="photo-container-3d">
                                <div className="photo-frame">
                                    <img src="/images/profile.jpg" alt="Bhagya" />
                                    <div className="photo-overlay"></div>
                                </div>
                                <div className="photo-glow-aura"></div>
                                <div className="photo-corner-accent top-right"></div>
                                <div className="photo-corner-accent bottom-left"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Combined Journey Section */}
                <div className="about-journey-grid">
                    {/* Education Column */}
                    <div className="about-education-wrap">
                        <div className="journey-header">
                            <span className="section-subtitle">Origins</span>
                            <h2 className="section-title molten-text">Education.</h2>
                        </div>

                        <div className="edu-container">
                            <div className="edu-list">
                                {education.map((edu, index) => (
                                    <div key={index} className="edu-item glass-premium">
                                        <div className="edu-badge">{edu.year}</div>
                                        <h4 className="edu-degree">{edu.degree}</h4>
                                        <p className="edu-school">{edu.school}</p>
                                        <div className="edu-footer">
                                            <span className="edu-gpa">{edu.gpa}</span>
                                        </div>
                                        <div className="card-shine"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Resume Column */}
                    <div className="about-resumes-wrap">
                        <div className="journey-header">
                            <span className="section-subtitle">Portfolio</span>
                            <h2 className="section-title molten-text">Resumes.</h2>
                        </div>

                        <div className="about-resumes-list">
                            {resumes.map((resume, index) => (
                                <div key={index} className="about-resume-card glass-premium">
                                    <div className="resume-info-mini">
                                        <span className="resume-icon-mini">{resume.icon}</span>
                                        <div className="resume-text-mini">
                                            <h4 className="resume-role-mini">{resume.role}</h4>
                                            <p className="resume-desc-mini">{resume.description}</p>
                                        </div>
                                    </div>
                                    <div className="resume-actions-mini">
                                        <a href={resume.file} target="_blank" rel="noopener noreferrer" className="resume-btn-mini btn-view">VIEW</a>
                                        <a href={resume.file} download className="resume-btn-mini btn-download">PDF</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
