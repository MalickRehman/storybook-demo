// App.js
import React from 'react';
import { Button } from './stories/Button'; // Adjust the import path accordingly
import './App.css';

function App() {
  const onButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <Button type="primary" label="Primary Button" onClick={onButtonClick} />
    </div>
  );
}

export default App;
