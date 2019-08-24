import React from 'react';
import './App.css';
import Header from './Components/header';
import Particles from './Components/particlesBackground.js';
import Homepage from './Components/pages/homepage.js';



const App = () => {
  return (
    <div className="App">
      {/* <Header name="bryce"/> */}
      <Particles speed="1"/>
      <Homepage />
    </div>
  );
};

export default App;
