import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  
  useEffect(()=>{
  function resizing(){
    console.log("resized");
    setWidth(window.innerWidth)

  }
  window.addEventListener("resize", resizing)  ;
  
  return()=>{
    window.removeEventListener("resize", resizing)
  }
  },[])

  return (
    <>
      <h2>{width}px</h2>
          </>
  )
}

export default App
