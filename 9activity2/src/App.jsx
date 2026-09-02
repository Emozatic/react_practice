import { useState, useRef } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const timRef= useRef();
  function timer(){
    timRef.current= setInterval(()=>{
      console.log("1 sec");
    },1000)
  }
  function clear(){
    clearInterval(timRef.current)
    console.log("timer stopped")
  }

  return (
    <>
    <button onClick={timer}>start</button>
    <button onClick={clear}>Stop</button>
    </>
  )
}

export default App
