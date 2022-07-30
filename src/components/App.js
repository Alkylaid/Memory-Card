import { useState } from 'react';
import Cards from './Cards';
import GameOver from './GameOver';
import Scoreboard from './Scoreboard';

function App() {
  const [score, setScore] = useState(0);
  const [chosenCards, setChosenCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const updateScore = (i) => {
    if (i === 0) {
      setScore(0);
    } else setScore(score + 1);
  }

  return (
    <div>
      <Scoreboard score={score} highScore={highScore} setHighScore={setHighScore}></Scoreboard>
        <Cards
          updateScore={updateScore}
          chosenCards={chosenCards}
          setChosenCards={setChosenCards}
          setIsGameOver={setIsGameOver}
        />
      {isGameOver && <GameOver/>}
    </div>
  );
}

export default App;
