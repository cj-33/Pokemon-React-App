import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<string[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      const results = response.data.results;
      const selected = results.sort(() => 0.5 - Math.random()).slice(0, 2).map(p => p.name);
      setPokemon(selected);
    };

    fetchPokemon();
  }, []);

  return (
    <div className="App">
      {/* Top Section: Black frame */}
      <div className="battle-frame">
        {pokemon.map(p => <div key={p}>{p}</div>)}
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

