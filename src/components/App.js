import { useState } from 'react';
import Cards from './Cards';
import Scoreboard from './Scoreboard';

function App() {
  const [score, setScore] = useState(0);
  const [chosenCards, setChosenCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);

  return (
    <div>
      <Scoreboard score={score} highScore={highScore} setHighScore={setHighScore}></Scoreboard>
      {!isGameOver && (
        <Cards
          score={score}
          setScore={setScore}
          chosenCards={chosenCards}
          setChosenCards={setChosenCards}
          setIsGameOver={setIsGameOver}
        />
      )}
    </div>
  );
}

export default App;
