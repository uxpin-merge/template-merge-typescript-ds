import React from 'react';
import Button from './components/Button/Button';

function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      maxWidth: 500,
      margin: "0 auto"
      }}>
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
