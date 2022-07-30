const GameOver = ({newGame,setHighScore}) => {

  const startNewGame = () => {
    newGame();
    const gameOverScreen = document.getElementById('gameover-screen');
    gameOverScreen.style.display = "none";
  }
  const resetScores = () => {
    setHighScore(0);
    startNewGame();
  }
  return (
    <div id="gameover-screen">
      <div id="gameover-box">
        <h1>Game Over</h1>
        <div>
          <button onClick={startNewGame}>New Game</button>
          <button onClick={resetScores}>Reset Scores</button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
