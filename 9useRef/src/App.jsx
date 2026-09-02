import { useState } from 'react'
import './App.css'
import {useRef} from 'react'
function App() {
  const inputRef= useRef();
  const buttonRef= useRef();

  function focusInp(){
    inputRef.current.focus();
  }
  function focusButton(){
    buttonRef.current.focus();
    console.log("button clicked")
  }


  return (
    <>
    <input ref={inputRef}/>
    <button ref={buttonRef}>button for focus</button>
    <button onClick={focusInp}>Focus</button>
    <button onClick={focusButton}>Focus Btn</button>
      </>
  )
}

export default App
