import './App.css'
import { useState } from 'react'

function App() {
    const [tasks, setTasks]= useState([]);
    const [input , setInput]= useState("")
    function addingName(){
      setName("Rahul")
    }
    function incCount(){
      setCount(count+1);
    }
    function addingTask(){
      if(input===""){
        alert("please enter something in input");
        return
      }
      setTasks((prev)=>([
        ...prev,{
          id:Date.now(),
          title:input,
          completed:false
        }
      ]))
    }
    function removingTask(index){
      setTasks((prev)=>prev.filter((task,idx)=>task.id !== index))
    }
    

  return (
    <>
  <div>
    <h1>Task Manager</h1>
    <p>Manage your daily tasks</p>
    
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='enter your task'/>
    <button onClick={addingTask}>Add task</button>

    <div>
      <h3>Your Tasks:-</h3>
      <ul>{tasks.map((task)=>(
        <li key={task.id}>{task.title}
        <button onClick={()=>removingTask(task.id)}>Remove</button></li>
      ))}</ul>
    </div>
  </div>
    </>
  )
}

export default App
