import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function NoAILG() {
  return (
    <div className="project-detail-page p-8 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <Link to="/projects" className="text-blue-600 hover:text-blue-800 mb-6 inline-block font-medium">
          &larr; Back to Projects
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">NoAI LG - No AI Language Generalizer</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          NoAI LG is an innovative project aimed at generating meaningful sentences without relying on neural networks.
          In an era dominated by deep learning, this project takes a different approach, leveraging sophisticated
          pattern-based techniques to achieve language generation. Our goal is to demonstrate that compelling
          and coherent text can be produced through deterministic and rule-based systems, offering an alternative
          perspective to purely statistical or learning-based models.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Key Features:</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
          <li>
            <span className="font-medium">🔄 Custom tokenizer:</span> Identifies common phrases and linguistic patterns,
            breaking down complex sentences into manageable, semantically rich tokens. This allows for a deeper
            understanding of sentence structure beyond simple word-level analysis.
          </li>
          <li>
            <span className="font-medium">📊 Similarity matrix:</span> Employs a unique similarity matrix to replace
            words and phrases with context-aware alternatives. This ensures that generated text maintains
            cohesion and relevance to the initial input, creating a more natural flow.
          </li>
          <li>
            <span className="font-medium">💡 Modular Architecture:</span> Designed with modularity in mind, allowing
            for easy expansion and integration of new linguistic rules and pattern sets.
          </li>
          <li>
            <span className="font-medium">🚀 High Interpretability:</span> Unlike black-box neural networks, the
            logic behind NoAI LG's generations is transparent and understandable, making it easier to debug
            and improve.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Future Applications:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The underlying principles of NoAI LG open doors for various future applications, including:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
          <li><span className="font-medium">Question Answering Systems:</span> Generating precise answers by parsing questions and matching them with relevant information based on established patterns.</li>
          <li><span className="font-medium">Language Generation:</span> Crafting narrative text, summaries, or even creative writing based on specific constraints and rules.</li>
          <li><span className="font-medium">Summarization Tools:</span> Condensing lengthy texts into concise summaries by identifying key information and reconstructing it syntactically.</li>
          <li><span className="font-medium">Automated Content Creation:</span> Producing structured reports, news articles, or descriptions for various industries.</li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We believe NoAI LG offers a compelling vision for language generation that prioritizes transparency,
          control, and explainability, all while achieving high-quality linguistic output.
        </p>

        <p className="mt-8 text-center">
          <a 
            href="https://github.com/BitWattr/NoAI-LG" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-md"
          >
            Visit GitHub Repository
          </a>
        </p>
      </div>
    </div>
  );
}

export default NoAILG;
