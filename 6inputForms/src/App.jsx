import { useState } from 'react'
import './App.css'

function App() {
  const[name, setName]= useState("");
  const[age, setAge]= useState(0);
  function inputBox(e){
    setName(e.target.value);
  }
  function setage(e){
    setAge(e.target.value)
  }
  function handlesubmit(e){
    e.preventDefault();
    setName("")
    console.log(name)
  }
  


  return (
    <>
    <form onSubmit={handlesubmit}>
      <input type="text" placeholder='enter anything' onChange={inputBox} value={name}/>
    <input type="text" placeholder='enter age'  onChange={setage} value={age}/>
    <button type='submit'>Submit</button>
    </form>
    <h1>Hello {name}, your age is= {age}</h1>
      </>
  )
}

export default App
