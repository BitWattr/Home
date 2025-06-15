import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Icon for the AI button

function Home() {
  return (
    <>
      {/* Custom CSS for glowing animation */}
      <style>{`
        @keyframes glowing-button {
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

        .animate-glowing-button {
          animation: glowing-button 2s infinite alternate;
        }
      `}</style>

      <ProjectCard title="Home👋">
        <p>Welcome to BitWattr, an AI startup focused on research in AI models, deep learning, and machine learning.</p>
      </ProjectCard>
      <ProjectCard title="on Air🚀">
        <p>We made the model</p>
        {/* Button for Persona Mimicry AI */}
        <Link 
          to="/projects/chat-mimicry-ai" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-full mt-6 
                     transition-all duration-300 ease-in-out 
                     transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg 
                     animate-glowing-button
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Persona Mimicry AI <FontAwesomeIcon icon={faPaperPlane} className="ml-1" />
        </Link>
      </ProjectCard>
    </>
  );
}

export default Home;
