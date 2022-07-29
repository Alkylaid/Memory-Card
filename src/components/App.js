import { useState } from 'react';
import Cards from './Cards';
import Scoreboard from './Scoreboard';

function App() {
 const [score, setScore] = useState(0);
 const [prevCard, setPrevCard] = useState(null);
 const [isGameOver, setIsGameOver] = useState(false);


  return(
  <div>
    <Scoreboard score={score}></Scoreboard>
    {!isGameOver && <Cards  score={score} setScore={setScore} prevCard={prevCard} setPrevCard={setPrevCard} setIsGameOver={setIsGameOver}/>}
  </div>)
}

export default App;
