import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodos]  = useState([
    {id:1, text:"React", done:true},
    {id:2, text:"JS", done:false}
  ])
  
  function addNew(){
    setTodos((prevTodo)=>([
      ...prevTodo, {id:3, text:"Node", done:false}
    ]))
  }

  return (
    <>
    <ul>{todo.map((items)=>(
      <>
      <li key={items.id}>{items.text}</li>
      <li key={items.id}>{items.done ? "true" : "false"}</li>
      <hr />
      </>
    ))}</ul>
    <button onClick={addNew}>Add New</button>
      </>
  )
}

export default App
