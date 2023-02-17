import React from 'react';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Merge!
        </p>
      </header>
      <div style={{ width: "100%", maxWidth: 500, margin: "0 auto" }}>
        <Button label="Button"></Button>
      </div>
    </div>
  );
}

export default App;
