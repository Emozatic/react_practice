import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(["JavaScript", "React"])

  function adding(){
    setCount((previous)=>([
      ...previous, "Node"
    ]))
  }
  function remove(key){
    setCount((items)=>(
      items.filter((item,i)=>(
        i !== key
      ))
    ))
  }


  return (
    <>
      <ul>{count.map((data, idx)=>(
        <li key={idx}>{data}
        <button onClick={()=>{remove(idx)}}>Remove</button>
        </li>
      ))}</ul>
      <button onClick={adding}>Add</button>

          </>
  )
}

export default App
