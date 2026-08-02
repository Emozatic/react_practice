import { useState } from "react";
function LudoBoard(){
    const [moves,setMoves]= useState({blue:0, yellow:0, red:0, green:0});
    const [arr,setArr]= useState(["no moves"]);
    const updateBlue=()=>{
        console.log(`moves.blue= ${moves.blue}`);
        setMoves((previousMoves)=>{
            return{
                ...previousMoves, blue:previousMoves.blue+1
            }
        })
        arr.push("blue moves");
        setArr(arr);
        console.log(arr);
    }

        const updateYellow=()=>{
            console.log(`moves.yellow, ${moves.yellow}`);
            setMoves((previousMoves)=>{
                return{
                    ...previousMoves, yellow: previousMoves.yellow+1
                }
            })
        }

        const updateGreen=()=>{
            console.log(`moves.green,${moves.green}`);
            setMoves((previousMoves)=>{
                return{
                 ...previousMoves, green:moves.green+1
                }
            })
        }
        const updateRed=()=>{
            console.log(`moves.red,${moves.red}`);
            setMoves((previousMoves)=>{
                return{
                ...previousMoves, red:previousMoves.red+1
                }
            })
        }
    


    return(
    <>
    <h1>Game Begins</h1>
    <p>{arr}</p>
    <h2>For Blue:- {moves.blue}</h2>
    <button onClick={updateBlue} style={{backgroundColor:"blue"}}>Blue</button>

    <h1>Game Begins</h1>
    <h2>For yellow:- {moves.yellow}</h2>
    <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>Yellow</button>

    <h1>Game Begins</h1>
    <h2>For green:- {moves.green}</h2>
    <button onClick={updateGreen} style={{backgroundColor:"green"}}>Green</button>

    <h1>Game Begins</h1>
    <h2>For red:- {moves.red}</h2>
    <button onClick={updateRed} style={{backgroundColor:"red"}}>Red</button>
    </>
    )
}

export default LudoBoard;