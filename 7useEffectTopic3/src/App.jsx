import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'

function App() {
  const[show, setShow]= useState(true);
  useEffect(()=>{
    if(!show) return;
    const timer= setInterval(()=>{
      console.log("running...")
    },1000)
    // cleanup function
    return()=>{
      clearInterval(timer);
    }
  },[show])
  function toggler(){
    setShow(!show)
  }

  return (
    <>
  <button onClick={toggler}>Toggle</button>

    </>
  )
}

export default App
