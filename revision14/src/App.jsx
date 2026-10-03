import { useState } from 'react'
import {useRef} from "react";

function App() {
  const [count, setCount] = useState(0)
  
  const inputRef = useRef(null)
  const countRef= useRef(0);
  const prevRef= useRef(0);
  // function inputValue(){
  //   inputRef.current.focus();
  // }
  // function getValue(){
  //   console.log(inputRef.current.value);
  // }
  function incCount(){
    setCount(count+1);
  }
  function incRef(){
    prevRef.current= countRef.current;
    countRef.current= countRef.current+1
    console.log(`count=${countRef.current}`);
    console.log(`previous=${prevRef.current}`)
  }
  function focus(){
    inputRef.current.focus();
  }
  function clear(){
    inputRef.current.value= "";
  }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={incCount}>Inc Count</button>
     <input type="text"  ref={inputRef}/>

     {/* <button onClick={()=>{inputValue()}}>focus input</button>
     <button onClick={getValue}>get value</button> */}
     <button onClick={incRef}>Inc Ref</button>
     <button onClick={focus}>Focus</button>
     <button onClick={clear}>Clear</button>
         </>
  )
}

export default App
