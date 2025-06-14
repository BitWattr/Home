import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function ProjectCard({ title, children, githubLink, projectLink }) {
  return (
    <section className="project-card bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-200">
      {/* If projectLink exists, make the title a clickable Link */}
      {projectLink ? (
        <Link to={projectLink} className="text-blue-600 hover:text-blue-800 text-2xl font-semibold mb-3 block">
          {title}
        </Link>
      ) : (
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h2>
      )}
      
      <div className="text-gray-700 text-base leading-relaxed">
        {children}
      </div>
      
      {githubLink && (
        <p className="mt-4 text-sm">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
          >
            Visit GitHub Repo
          </a>
        </p>
      )}
    </section>
  );
}

export default ProjectCard;
