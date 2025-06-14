import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ChatMimicryAI() {
  const [inputText, setInputText] = useState('');
  const [mimickedText, setMimickedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateMimicry = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to mimic.');
      setMimickedText('');
      return;
    }

    setIsLoading(true);
    setError('');
    setMimickedText('');

    try {
      const chatHistory = [];
      chatHistory.push({
        role: "user",
        parts: [{ text: `Mimic the following text in its style, tone, and vocabulary, generating a short, coherent response or continuation based on the input: "${inputText}"` }]
      });

      const payload = { contents: chatHistory };
      const apiKey = ""; // Canvas will automatically provide the API key
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setMimickedText(text);
      } else {
        setError('Failed to mimic text. Please try again.');
        console.error('Unexpected API response structure:', result);
      }
    } catch (err) {
      setError('An error occurred while communicating with the AI. Please try again later.');
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="project-detail-page p-8 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <Link to="/projects" className="text-blue-600 hover:text-blue-800 mb-6 inline-block font-medium">
          &larr; Back to Projects
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Chat Mimicry AI</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Chat Mimicry AI project focuses on developing an advanced AI model capable of understanding and replicating
          distinct conversation styles. Our goal is to create an AI that doesn't just respond to content but
          also adapts to the nuances of human communication, including tone, vocabulary, sentence structure, and even
          subtle expressive elements.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How it Works:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This AI model is designed to analyze provided text samples and extract various stylistic features.
          By identifying recurring patterns in phrasing, word choice, and overall conversational flow,
          it learns to generate new text that feels genuinely consistent with the input style.
          This can be useful for creating personalized chatbots, generating content in a specific brand voice,
          or even for creative writing applications.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Live Demo:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Enter some text below, and our Chat Mimicry AI will attempt to generate a response in a similar style.
        </p>

        <div className="mimicry-demo bg-gray-100 p-6 rounded-lg shadow-inner mb-6">
          <div className="mb-4">
            <label htmlFor="inputText" className="block text-gray-700 text-sm font-bold mb-2">
              Your Input Text:
            </label>
            <textarea
              id="inputText"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y min-h-[100px]"
              placeholder="E.g., 'Hey there! How's your day going? Mine's pretty chill.'"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows="4"
            ></textarea>
          </div>
          
          <button
            onClick={generateMimicry}
            disabled={isLoading}
            className={`bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Mimicking...' : 'Mimic Text'}
          </button>

          {error && (
            <p className="text-red-500 text-sm mt-4">{error}</p>
          )}

          {mimickedText && (
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mimicked Output:</h3>
              <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">{mimickedText}</p>
            </div>
          )}
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Potential Applications:</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
          <li><span className="font-medium">Personalized Chatbots:</span> Creating bots that can interact in a user's preferred communication style.</li>
          <li><span className="font-medium">Content Generation:</span> Producing articles, marketing copy, or social media posts consistent with a specific brand voice.</li>
          <li><span className="font-medium">Creative Writing:</span> Assisting authors in maintaining character voice or generating dialogue in a particular style.</li>
          <li><span className="font-medium">Accessibility:</span> Adapting text to be more easily understood by users with specific cognitive needs or preferences.</li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We are continuously refining the Chat Mimicry AI to improve its accuracy and versatility in understanding and reproducing diverse communication styles.
        </p>
      </div>
    </div>
  );
}

export default ChatMimicryAI;
