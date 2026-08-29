import { useState } from 'react'
import './App.css'

function App() {
  const [skills, setSkills]= useState(["React", "Node"]);

  function add(){
    setSkills((prevSkills)=>([
     prevSkills[0], "Js", ...prevSkills.slice(1)
    ]))
  }

  return (
    <>
    {skills.map((skill)=>(
      <h1>{skill}</h1>
    ))}
    <button onClick={add}>Add</button>
      </>
  )
}

export default App
