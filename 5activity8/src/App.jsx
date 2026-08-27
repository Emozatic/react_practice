import { useState } from 'react'
import './App.css'

function App() {

const [todos, setTodos]= useState([
  {id:1, text:"React", done:false},
  {id:2, text:"JavaScript", done:true}
])

function change(id){
  setTodos((prevTodo)=>(
    prevTodo.map((todo)=>
      todo.id === id ? {...todo, done !todo.done} : todo
    )
  ))
}
  return (
    <>
  <ul>{todos.map((todo)=>(
    <>
    <li key={todo.id}>{todo.text}- {todo.done ? "💯" : "❌"}
    <button onClick={()=>{change(todo.id)}}>change</button> </li>  
    </>
  ))}</ul>

  
    </>

  )
}

export default App
