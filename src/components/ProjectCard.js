import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ProjectCard({ title, children, githubLink, projectLink }) {
  const handleTryNowClick = () => {
    if (projectLink) {
      window.location.href = projectLink; // Navigate to the project link
    }
  };

  return (
    <section className="project-card bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-200">
      {/* Custom CSS for glowing button animation and enhanced glassmorphism 
        has been moved to index.css for better global styling management.
      */}

      {/* Title as a glowing link, as requested */}
      {projectLink ? (
        <Link 
          to={projectLink} 
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-3 
                     transition-all duration-300 ease-in-out 
                     transform hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg 
                     animate-glowing-button-project focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          {title} <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
        </Link>
      ) : (
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h2>
      )}
      
      <div className="text-gray-700 text-base leading-relaxed mb-4">
        {children}
      </div>
      
      {/* "Try now" button with enhanced glass style and larger size */}
      {projectLink && (
        <div className="mt-2 flex flex-wrap gap-2 justify-center">
            <button 
            onClick={handleTryNowClick} // Use onClick for a real button
            className="inline-flex items-center gap-2 text-lg font-bold py-3 px-6 rounded-full /* Increased size here */
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
                       glass-button" /* Apply enhanced glass theme */
          >
            Try Now <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
          </button>
        </div>
      )}

      {githubLink && (
        <p className="mt-4 text-sm text-center">
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
