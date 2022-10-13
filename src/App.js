import './App.css';
import AddColor from './AddColor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("");
  const [isDarkText, setIsDarkText] = useState(false);

  return (
    <div className="App">
      <AddColor color={color} setColor={setColor} isDarkText={isDarkText} setIsDarkText={setIsDarkText}></AddColor>
    </div>
  );
}

export default App;
