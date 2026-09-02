import { useState, useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const countRef= useRef(0);

  useEffect(()=>{
    countRef.current= count;
  },[count])

  function inc(){
    setCount(count+1);
  }

  return (
    <>
  <h1>{count}</h1>
  <h2>{countRef.current}</h2>
  <button onClick={inc}>Inc</button>
    </>
  )
}

export default App
