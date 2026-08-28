import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(["JavaScript", "React"])

  function adding(){
    setCount((previous)=>([
      ...previous, "Node"
    ]))
  }


  return (
    <>
      <ul>{count.map((data, idx)=>(
        <li key={idx}>{data}
        </li>
      ))}</ul>
      <button onClick={adding}>Add</button>
          </>
  )
}

export default App
