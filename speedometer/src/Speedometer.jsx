import { useState } from "react";

function Speedometer(){
    const initialScore=  {fuel:100, speed:0}
    
    const [meter, setMeter]= useState(initialScore);
    let set=()=>{
        setMeter((previousValues)=>{
            let newSpeed= previousValues.speed+1;
            let newFuel= previousValues.fuel-1;
            if(newSpeed>100 || newFuel<0){
                setMeter((previousValues)=>{
                    return{...previousValues, speed: initialScore.speed, fuel:initialScore.fuel}
                })
            }
            return{
                ...previousValues, fuel:newFuel, speed:newSpeed
            }
        })
    }
    let reset =()=>{
        setMeter(initialScore);
    }
    
    return(
        <>
        <h1>{meter.fuel}</h1>
        <h2>{meter.speed}</h2>
        <button onClick={set}>bhagao</button>
        <button onClick={reset}>reset</button>
        </>
    )
}

export default Speedometer;






