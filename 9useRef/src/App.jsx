import { useState } from 'react'
import './App.css'
import {useRef} from 'react'
function App() {
  const [count, setCount]= useState(0);
  const inputRef= useRef();
  const buttonRef= useRef();
  const countRef= useRef(0);

  function focusInp(){
    inputRef.current.focus();
  }
  function focusButton(){
    buttonRef.current.focus();
    console.log("button clicked")
  }
  function changeValue(){
    setCount(count+1);
  }


  return (
    <>
  <h1>{countRef.current}</h1>
  <h2>{count}</h2>
    {/* <input ref={inputRef}/>
    <button ref={buttonRef}>button for focus</button>
    <button onClick={focusInp}>Focus</button>
    <button onClick={focusButton}>Focus Btn</button> */}
    <button onClick={changeValue}>Update count</button>
      </>
  )
}

export default App
