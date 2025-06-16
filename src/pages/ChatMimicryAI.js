//import React from 'react';
import { Link } from 'react-router-dom';
//import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function ChatMimicryAI() {
//  const [inputText, setInputText] = useState('');
//  const [mimickedText, setMimickedText] = useState('');
//  const [isLoading, setIsLoading] = useState(false);
//  const [error, setError] = useState('');


  return (
    <div className="project-detail-page p-8 bg-gray-50 min-h-screen">
      <style jsx>{`
        @keyframes glowing-border {
          0% {
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 123, 255, 0.8), 0 0 30px rgba(0, 123, 255, 0.6);
          }
          100% {
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
          }
        }

        @keyframes glowing-border-purple {
          0% {
            box-shadow: 0 0 5px rgba(111, 66, 193, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(111, 66, 193, 0.8), 0 0 30px rgba(111, 66, 193, 0.6);
          }
          100% {
            box-shadow: 0 0 5px rgba(111, 66, 193, 0.4);
          }
        }

        .animate-glowing-blue {
          animation: glowing-border 2s infinite alternate;
          background-color: #007bff; /* Bootstrap primary blue */
          color: white;
        }

        .animate-glowing-purple {
          animation: glowing-border-purple 2s infinite alternate;
          background-color: #6f42c1; /* Bootstrap purple */
          color: white;
        }

        .cta-button {
          padding: 12px 28px;
          border-radius: 9999px; /* Pill shape */
          font-weight: bold;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          border: none;
          cursor: pointer;
          gap: 8px; /* Space between icon and text */
        }

        .cta-button:hover {
          transform: translateY(-3px); /* Subtle lift on hover */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <Link to="/projects" className="text-blue-600 hover:text-blue-800 mb-6 inline-block font-medium">
          &larr; Back to Projects
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">🗣️ AI Person Mimicry Chat 🧠</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Transform your WhatsApp chat history into a unique AI persona that perfectly mirrors a specific participant's communication style.
          Experience truly personalized and engaging AI interactions, replicating tone, vocabulary, and nuances.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
          <a
            href="https://chat-clone-ai.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button animate-glowing-blue"
          >
            <FontAwesomeIcon icon={faGlobe} /> Try Online Now!
          </a>
          <a
            href="https://github.com/BitWattr/chat-clone-ai-local"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button animate-glowing-purple"
          >
            <FontAwesomeIcon icon={faLaptopCode} /> Run it Locally (GitHub)
          </a>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">✨ Key Features</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
          <li><span className="font-medium">🕵️ Persona Mimicry:</span> Select a participant from your WhatsApp chat history for the AI to mimic, bringing their unique style to life.</li>
          <li><span className="font-medium">🔒 Local & Hosted Options:</span> Choose between running the AI entirely on your machine for ultimate privacy or using our convenient hosted service.</li>
          <li><span className="font-medium">🚀 Easy Setup:</span> Get started quickly with straightforward instructions for both local deployment and online usage.</li>
          <li><span className="font-medium">⚙️ Customizable LLM Settings:</span> For local runners, adjust your Ollama host and LLM model directly from the application's settings.</li>
          <li><span className="font-medium">🌐 Web-Based Interface:</span> Access the application effortlessly through your web browser, no complex software installations required.</li>
        </ul>
        <a
            href="https://discord.gg/3mhjrDeT"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            style={{
              background: '#5865F2',
              color: '#fff',
              display: 'inline-flex',
              alignItems: 'center',
              fontWeight: 'bold',
              gap: '8px',
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ marginRight: '8px', fill: '#fff' }}
            >
              <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.444.864-.608 1.249a18.524 18.524 0 0 0-5.487 0 12.51 12.51 0 0 0-.617-1.249.07.07 0 0 0-.073-.035A19.736 19.736 0 0 0 3.677 4.369a.064.064 0 0 0-.03.027C.533 9.09-.32 13.579.099 18.021a.08.08 0 0 0 .028.056 19.993 19.993 0 0 0 5.993 3.032.07.07 0 0 0 .076-.027c.462-.63.874-1.295 1.226-1.994a.07.07 0 0 0-.038-.098 13.138 13.138 0 0 1-1.885-.9.07.07 0 0 1-.007-.117c.127-.094.254-.192.373-.291a.07.07 0 0 1 .071-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 0 1 .072.009c.12.099.246.198.374.292a.07.07 0 0 1-.006.117 12.298 12.298 0 0 1-1.886.899.07.07 0 0 0-.038.099c.36.698.772 1.362 1.225 1.993a.07.07 0 0 0 .076.028 19.941 19.941 0 0 0 6.002-3.032.07.07 0 0 0 .028-.055c.5-5.177-.838-9.637-3.548-13.625a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/>
            </svg>
            Join Discord
          </a>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How It Works: Behind the Mimicry</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The AI Person Mimicry Chat harnesses advanced language models to analyze and learn distinct communication patterns from your provided chat history.
          Whether you choose the online hosted service or the local version, the core principle remains the same:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
          <li><span className="font-medium">Chat History Upload:</span> You start by uploading your WhatsApp chat history (as a .txt file).</li>
          <li><span className="font-medium">Intelligent Parsing:</span> The uploaded chat content is meticulously parsed to extract messages, timestamps, and identify all participants.</li>
          <li><span className="font-medium">Persona Selection:</span> You designate one participant as the "persona" for the AI to mimic; the other becomes "You."</li>
          <li><span className="font-medium">AI Interaction:</span> Your messages, combined with the learned persona style, are fed to a large language model.</li>
          <li><span className="font-medium">Dynamic Response Generation:</span> The LLM generates responses that are strikingly consistent with the chosen persona's style, tone, and vocabulary.</li>
        </ul>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <span className="font-bold">For Local Use:</span> All processing and AI interactions happen directly on your machine using Ollama, ensuring your data remains private and in your control.
          <br />
          <span className="font-bold">For Online Use:</span> Our hosted service processes data temporarily for an effortless experience, leveraging secure cloud infrastructure.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We are continuously refining the Chat Mimicry AI to improve its accuracy and versatility in understanding and reproducing human personalities.
          Ready to create your AI persona? Give it a try today!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
          
        </div>
      </div>
    </div>
  );
}

export default ChatMimicryAI;