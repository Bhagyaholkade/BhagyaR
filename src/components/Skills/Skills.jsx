import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { category: "Programming", items: ["Python", "JavaScript"] },
        { category: "Frontend", items: ["ReactJS", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Figma"] },
        { category: "Data Analytics", items: ["PowerBI", "Streamlit", "Excel", "Statistics", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib"] },
        { category: "Backend & Database", items: ["Node.js", "Express.js", "Flask", "RESTful API", "JWT Auth", "SQL", "PostgreSQL", "MongoDB"] },
        { category: "DevOps & Tools", items: ["Git", "Github", "Render", "Netlify", "Vercel", "Postman"] }
    ];

    return (
        <section className="skills-page" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle primary-subtitle underline-animate">Expertise</span>
                    <h2 className="section-title molten-text">Skills & Tools.</h2>
                </div>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-group glass-premium">
                            <div className="stat-icon-blob"></div>
                            <h4 className="skill-category">{skill.category}</h4>
                            <div className="skill-tags">
                                {skill.items.map((item, i) => (
                                    <span key={i} className="skill-tag">{item}</span>
                                ))}
                            </div>
                            <div className="card-shine"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
