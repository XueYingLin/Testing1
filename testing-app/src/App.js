import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Testing App</h1>
      <p>Learn react!</p>
      <Greeting />
      <Counter />
    </div>
  );
}

export default App;
