import React, { useState, useEffect } from 'react';
import servants from '../json/servants.json'

function App() {
  const [cards, setCards] = useState(servants);

  useEffect(() => {
  }, []);

  return <div className="App"><img src={cards[0].img}></img></div>;
}

export default App;
