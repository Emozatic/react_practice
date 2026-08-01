import { useState } from "react";

function Traffic(){
    const [light, setLight]= useState("red");
    let showLight= ()=>{
        if(light==="red"){
            setLight("green");
        }
        else if(light==="green"){
            setLight("blue");
        }
        else if(light===blue){
            setLight("red")
        }
        else if(light==="red"){
            setLight("green");
        }
    }
    return(
        <>
    <h1>Traffic Light</h1>

    <h2>{light}</h2>
        <button onClick={showLight}>changeLight</button>
        </>
    )
}

export default Traffic;