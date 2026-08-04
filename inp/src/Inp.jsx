import { useState } from "react";

function Inp (){
    const [text, setText]= useState("")

    const addText=()=>{
            setText((previousText)=>{
                return{
                    ...previousText
                }
            })
    }
    return(
        <>
        <input type="text" onChange={addText}/>
        </>
    )
}

export default Inp;