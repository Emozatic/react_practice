import { useState, useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inpRef= useRef();

  function inpValue(){
    console.log(inpRef.current.value);
  }
  function focusInp(){
    inpRef.current.focus();
  }
  function clear(){
    inpRef.current.value=""
  }

  return (
    <>
    <input ref={inpRef}/>
      <button onClick={inpValue}>Show</button>
      <button onClick={focusInp}>focus</button>
      <button onClick={clear}>Clear
      </button>
          </>
  )
}

export default App
