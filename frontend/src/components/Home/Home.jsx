import React, { useState } from 'react';
import './Home.css';

export const Home = () => {
  const [handle, setHandle] = useState('');
  const [topic, setTopic] = useState('');
  const [output, setOutput] = useState('');
  const [videos, setVideos] = useState('');

  const handleGenerate = (e) => {
    e.preventDefault();
    setOutput(`🧠 Research content for "${topic}"`);
    setVideos(`📺 Related videos for @${handle}`);
  };

  return (
    <div className="home-page">
      <h1 className="main-heading">🎥 Your YouTube Researcher 🔍</h1>
      <div className="research-container">
        <div className="input-section card">
          <h2 className="input-heading">✍️ Input</h2>
          <form onSubmit={handleGenerate}>
            <input
              type="text"
              placeholder="Enter YouTube Handle"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Topic to Research"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <button type="submit">🚀 Generate</button>
          </form>
        </div>

        <div className="output-section card">
          <h2>📤 Output</h2>
          <textarea readOnly value={output} />
          <textarea readOnly value={videos} />
        </div>
      </div>
    </div>
  );
};
