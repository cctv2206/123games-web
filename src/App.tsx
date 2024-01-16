import React from 'react';
import './App.css';
import backgroundImage from './on_mars_bg_small.png';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='header-content'>
          123GAMES
        </div>
      </div>
      
      <div className='body' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className='body-content'>
          <div className='game-title'>On Mars</div>
          <div className='description'>A multiplayer online adventure sandbox game powered by GPT</div>
          <div className='start-btn' onClick={() => {
            window.open('https://chat.openai.com/g/g-oXk0kl8F8', '_blank');
          }}>PLAY NOW</div>
        </div>
      </div>
      
      <div className='footer'>
        &copy; 2024 123GAMES. All rights reserved.
      </div>
    </div>
  );
}

export default App;
