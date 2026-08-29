import { useState } from 'react'
import './App.css'

function App() {
  const [skills, setSkills]= useState(["Js", "React"]);

  function adding(){
    setSkills((prev)=>([
      ...prev, "Node"
    ]))
  }
  function del(key){
    setSkills((prev)=>
      prev.filter((skills, id)=>{
        return id !== key
      })
    )
  }
  return (
    <>
      <ul>{skills.map((items, idx)=>{
       return <li key={idx}>{items}
        <button onClick={()=>{del(idx)}}>Del</button>
        </li>
      })}</ul>
      <button onClick={adding}>Add</button>
          </>
  )
}

export default App
