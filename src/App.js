import React from 'react';
import './App.css';
import Box from './components/Box';
import Color from './components/Box';
import Home from './components/Home';
import Title from './components/Title';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        <Title />
        <Home />
        <br />
        <Box />
        
      </header>
    </div>
  );
}

export default App;
