import React, { useState, useEffect } from 'react'; // Corrected import statement
import './home.css';

const Home = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleSettings = () => setShowSettings(!showSettings);

  return (
    <div className="home">
      <div id="clock-section">
        <div id="clock">{currentTime}</div>
        <div id="date">{new Date().toDateString()}</div>
        <div id="divider"></div>
      </div>
      <div id="settings" onClick={toggleSettings}>
        <i className="fas fa-cog"></i>
      </div>
      {showSettings && (
        <div id="toggle">
          {/* Insert settings options here */}
          <div>Settings Placeholder</div>
        </div>
      )}
    </div>
  );
};

export default Home;
