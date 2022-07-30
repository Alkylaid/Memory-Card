const GameOver = () => {
  return (
    <div className="gameover-screen">
      <div id="gameover-box">
        <h1>Game Over</h1>
        <div>
          <button>New Game</button>
          <button>Reset Scores</button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
