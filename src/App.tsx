import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Top Section: Black frame */}
      <div className="battle-frame">
        {/* Placeholder for Pokemon images */}
      </div>

      {/* Bottom Section: Battle Log and Start Button */}
      <div className="battle-controls">
        <div className="battle-log">
          <h2>Battle Log</h2>
          <textarea readOnly />
        </div>
        <button className="start-battle-button">Start Battle!</button>
      </div>
    </div>
  );
};

export default App;
