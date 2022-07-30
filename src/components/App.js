import { useEffect, useState } from 'react';
import Cards from './Cards';
import GameOver from './GameOver';
import Header from './Header';
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
  const newGame = () => {
    setScore(0);
    setIsGameOver(false);
    setChosenCards([]);
  }

  useEffect(() => {
    if (chosenCards.length >= 12) {
      setIsGameOver(true);
    }
  },[chosenCards])
  
  return (
    <div>
      <Header />
      <Scoreboard score={score} highScore={highScore} setHighScore={setHighScore}></Scoreboard>
        <Cards
          updateScore={updateScore}
          chosenCards={chosenCards}
          setChosenCards={setChosenCards}
          setIsGameOver={setIsGameOver}
        />
      {isGameOver && <GameOver newGame={newGame} setHighScore={setHighScore}/>}
    </div>
  );
}

export default App;
