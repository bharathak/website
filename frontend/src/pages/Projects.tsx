import { useState, useEffect } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import API_BASE_URL from '../config';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/projects`)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch projects", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section style={{ marginBottom: '3rem' }}>
        <h1>Projects Portfolio</h1>
        <p style={{ color: '#94a3b8' }}>A collection of systems tools and services built with Go.</p>
      </section>

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="card-grid">
          {projects.map(project => (
            <div key={project.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <Code size={24} color="var(--accent-color)" />
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3>{project.title}</h3>
              <p style={{ marginBottom: '1.5rem', color: '#94a3b8' }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.technologies.map(tech => (
                  <span key={tech} style={{ 
                    fontSize: '0.75rem', 
                    padding: '0.25rem 0.5rem', 
                    background: 'var(--bg-color)', 
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
