import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(["React", "JavaScript"])
  function add(){
    setCount((items)=>([...items,"Node"]))
  }
  function filteratin(){
    setCount((items)=>(
  items.filter((ele,idx,array)=>(
        ele!== "Node"
  ))
    ))
  }

  return (
    <>
  <h1>{count[0]}</h1>
  <h2>{count[1]}</h2>
  <button onClick={add}>Add</button>
  <button onClick={filteratin}>Del</button>
  <ul>{count.map((item)=>(
    <li>{item}</li>
  ))}</ul>
  
     </>
  )
}

export default App
