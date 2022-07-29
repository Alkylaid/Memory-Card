import { useEffect } from "react";


const Scoreboard= ({score, highScore, setHighScore}) => {
    useEffect(() => {
        if (score >= highScore) {
            setHighScore(score);
        }
    },[score, highScore, setHighScore])
    return ( <div id="scoreboard">Score: {score} Highscore: {highScore}</div> );
}
 
export default Scoreboard ;
