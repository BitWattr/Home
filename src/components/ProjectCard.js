import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Using faArrowRight for "open"

function ProjectCard({ title, children, githubLink, projectLink }) {
  return (
    <section className="project-card bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-200">
      {/* Custom CSS for glowing button animation */}
      <style>{`
        @keyframes glowing-button-project {
          0% {
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 15px rgba(0, 123, 255, 0.8), 0 0 25px rgba(0, 123, 255, 0.6);
          }
          100% {
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
          }
        }

        .animate-glowing-button-project {
          animation: glowing-button-project 2s infinite alternate;
        }
      `}</style>

      {/* If projectLink exists, make the title a clickable Link styled as a button */}
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
