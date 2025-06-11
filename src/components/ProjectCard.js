import React from 'react';

function ProjectCard({ title, children, githubLink }) {
  return (
    <section className="project-card">
      <h2>{title}</h2>
      {children}
      {githubLink && <p><a href={githubLink} target="_blank" rel="noopener noreferrer">Visit github repo</a></p>}
    </section>
  );
}

export default ProjectCard;