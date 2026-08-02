import { useState } from "react"; 

function Input(){
    const [text, setText]= useState("");
    let texting =(event) =>{
        setText(event.target.value);
    }
    let empty=()=>{
        setText("");
        input.preventDefault;
    }
    return(
        <>
        <input type="text" onChange={texting}/>
        <h1>{text}</h1>
        <button onClick={empty}>Btn</button>
        </>
    )
}

export default Input;