import React from 'react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Ciniverse',
        category: 'Full Stack Development',
        description: 'Real-time movie booking platform with seat selection and watch party features.',
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800',
        link: 'https://cine-verse-mu-jade.vercel.app/',
        tags: ['React', 'Node.js', 'Socket.io', 'MongoDB']
    },
    {
        id: 2,
        title: 'Stackfolio',
        category: 'Full Stack | DevOps',
        description: 'GitHub-like platform for repository management with Docker and WebSockets.',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800',
        link: 'https://stackfolio-topaz.vercel.app/',
        tags: ['React', 'Docker', 'WebSockets', 'PostgreSQL']
    },
    {
        id: 3,
        title: 'COVID-19 Symptom Checker',
        category: 'Web Application | HealthTech',
        description: 'Multi-page Streamlit app for real-time symptom assessment and hospital booking with risk scoring.',
        image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800',
        link: '#',
        tags: ['Streamlit', 'Python', 'HealthTech', 'Scikit-learn']
    },
    {
        id: 4,
        title: 'Cricket Outcome Predictor',
        category: 'AI | Machine Learning',
        description: 'AI-based outcome predictor using ML pipelines and interactive Streamlit dashboards for match analytics.',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
        link: '#',
        tags: ['ML', 'Pandas', 'Python', 'Matplotlib']
    },
    {
        id: 5,
        title: 'Disaster & Weather Analytics',
        category: 'Data Science | Real-Time',
        description: 'Real-time dashboard analyzing weather and disaster data using Plotly and live API integration.',
        image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800',
        link: '#',
        tags: ['Plotly', 'APIs', 'Data Science', 'Python']
    },
    {
        id: 6,
        title: 'Financial Analytics Dashboard',
        category: 'FinTech | Machine Learning',
        description: 'Interactive Flask & Plotly dashboard analyzing 40K+ financial records with 94% fraud detection accuracy.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        link: '#',
        tags: ['Flask', 'Machine Learning', 'FinTech', 'Data Analysis']
    }
];

const Projects = () => {
    return (
        <section className="projects liquid-core" id="work">
            <div className="projects-bg">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Selected Work</span>
                    <h2 className="section-title">Projects that push boundaries.</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card nebula-glass">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">View Case Study</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-footer">
                    <button className="btn btn-secondary glass-btn">Explore All Work</button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
