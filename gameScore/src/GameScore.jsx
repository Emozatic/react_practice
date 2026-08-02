import { useState } from "react";

function GameScore(){
    const [score, setScore]= useState({player1:0, player2:0})
    const [winner, setWinner]= useState("");
    let scorePlayer1=()=>{
        setScore((previousScore)=>{
            let newScore= previousScore.player1+1;
            if(newScore===10){
                setWinner("player1");
            }
            return{
                ...previousScore, player1: newScore
            }
        })
    }

    let scorePlayer2=()=>{
        setScore((previousScore)=>{
            let newScore= previousScore.player2+1;
            if(newScore===10){
                setWinner("player2");
            }
            return{
                ...previousScore, player2: newScore
            }
        })
    }

    let reset=()=>{
        setScore({player1:0, player2:0});
    }

    return(
        <>
        <h1>Scores:-</h1>
        <h2>Player1:- {score.player1}</h2>
        <button onClick={scorePlayer1}>player1</button>

        <h2>Player1:- {score.player2}</h2>
        <button onClick={scorePlayer2}>player2</button>

        <h2>winner:- {winner}</h2>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default GameScore;