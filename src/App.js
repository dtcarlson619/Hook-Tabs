import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Content from './components/Content';

function App() {
  const [setIndex, setIndexState] = useState(0)

  const changeValue = (textIndex) => {
    setIndexState(textIndex)
  }

  const textArray = [
    "This one is good",
    "This one is better",
    "This one is the best"
  ]

  return (
    <div className="App">
        <Tabs changeValue={() => changeValue(0)} tabLabel="Tab 1" />
        <Tabs changeValue={() => changeValue(1)} tabLabel="Tab 2" />
        <Tabs changeValue={() => changeValue(2)} tabLabel="Tab 3" />
        <Content displayText={textArray[setIndex]} />
    </div>
  );
}

export default App;