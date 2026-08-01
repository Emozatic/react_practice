import { useState } from "react";
function Password(){
    const [isHide, setShow]= useState(false);
    let change= ()=>{
        setShow(!isHide);
    }
    let showing= isHide ? "show" : "hide"
    let functionality = isHide ? "password" : "text";

    return(
        <>
        <input type= {functionality}/>
        <button onClick={change}>{showing}</button>
        </>
    )
}

export default Password;

