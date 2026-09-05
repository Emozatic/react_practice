import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName]= useState("");
  const [input, setInput]= useState("");

  function settingInput(e){
    setInput(e.target.value);
  }
  function settingName(){
     let oldValues=JSON.parse(localStorage.getItem("name") || "[]");
     let updatedName= [...oldValues, input];
  localStorage.setItem("name",JSON.stringify(updatedName));
    
   
    setName(updatedName)
    setInput("")
  }


  return (
    <>
    <h1>{name}</h1>
    <input type="text" value={input} name='input' onChange={settingInput}/>
    <button onClick={settingName}>add</button>
    </>
  ) 
}

export default App
