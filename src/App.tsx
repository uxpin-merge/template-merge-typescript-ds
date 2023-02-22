import React from 'react';
import Button from './components/Button/Button';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <p>
          Hello Merge!
        </p>
      </header>
      <div>
        <Button label="Button"></Button>
      </div>
    </div>
  );
}

export default App;
