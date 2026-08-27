import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(["React", "JavaScript"])
  function add(){
    setCount((items)=>([...items,"Node"]))
  }

  return (
    <>
  <h1>{count[0]}</h1>
  <h2>{count[1]}</h2>
  <button onClick={add}>Add</button>
  <ul>{count.map((item)=>(
    <li>{item}</li>
  ))}</ul>
     </>
  )
}

export default App
