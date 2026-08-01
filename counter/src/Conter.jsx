import{useState} from "react";
function Counter (){
    const [count, setCounter]= useState(0)
    const [count2, setCounter2]= useState(0)
    let incCount=()=>{
        setCounter(count+1);
    }
    let decCount=()=>{
        setCounter2(count2-1);
    }
    return(
        <>
        <button onClick={incCount}>Inc Count</button>
        <button onClick={decCount}>Dec Count</button>
        <h1>{count}</h1>
        <h2>{count2}</h2>
        </>
    )
}

export default Counter;