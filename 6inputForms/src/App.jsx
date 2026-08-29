import { useState } from 'react'
import './App.css'

function App() {
  const[name, setName]= useState("");
  function inputBox(e){
    setName(e.target.value);
  }


  return (
    <>
    <input type="text" placeholder='enter anything' onChange={inputBox} value={name}/>
      </>
  )
}

export default App
