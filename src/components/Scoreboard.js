import { useEffect } from "react";


const Scoreboard= ({score, highScore, setHighScore}) => {
    useEffect(() => {
        if (score >= highScore) {
            setHighScore(score);
        }
    },[score, highScore, setHighScore])
    return ( <div id="scoreboard"><div id="score">Score: {score}</div><div id="highscore">Highscore: {highScore}</div></div> );
}
 
export default Scoreboard ;
