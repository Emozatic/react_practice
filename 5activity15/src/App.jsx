import { useState } from 'react'
import './App.css'

function App() {
  const [skills, setSkills]= useState(["React", "Node", "React"]);

  function add(){
    setSkills((prevSkills)=>([
     prevSkills[0], "Js", ...prevSkills.splice(1,1)
    ]))
  }
  function delNode(){
    setSkills((prevSkills)=>(
      prevSkills.filter((items)=>(
        items !== "Node"
      ))
    ))
  }

  return (
    <>
    {skills.map((skill)=>(
      <h1>{skill}</h1>
    ))}
    <button onClick={add}>Add</button>
    <button onClick={delNode}>Del</button>
      </>
  )
}

export default App
