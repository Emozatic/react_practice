import { useState } from 'react'
import './App.css'

function App() {
  const [skills, setSkills]= useState(["Js", "React"]);

  function adding(){
    setSkills((prev)=>([
      ...prev, "Node"
    ]))
  }
  return (
    <>
      <ul>{skills.map((items, idx)=>{
       return <li key={idx}>{items}

        </li>
      })}</ul>
      <button onClick={adding}>Add</button>
          </>
  )
}

export default App
