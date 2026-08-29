import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodos]  = useState([
    {id:1, text:"", done:true},
    {id:2, text:"JS", done:false}
  ])
  
  function addNew(){
    setTodos((prevTodo)=>([
      ...prevTodo, {id:3, text:"Node", done:false}
    ]))
  }

  function toggle(id){
    setTodos((todo)=>
      todo.map((items)=>
        items.id === id ? {...items, done:!items.done} : items
      )
    )
  }

  function del(id){
    setTodos((prevTodo)=>(
       prevTodo.filter((todo)=>(
        todo.id !== id
      ))
    ))
  }

  return (
    <>
    <ul>{todo.map((items)=>(
      <>
      <li key={items.id}>{items.text}</li>
      <li key={items.id}>{items.done ? "true" : "false"}</li>
      <button onClick={()=>{toggle(items.id)}}>Toggler</button>
      <button onClick={()=>del(items.id)}>del</button>
      <hr />
      </>
    ))}</ul>
    <button onClick={addNew}>Add New</button>
      </>
  )
}

export default App
