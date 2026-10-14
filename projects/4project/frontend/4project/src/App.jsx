import './App.css'
import { useState, useEffect } from 'react'


function App() {
    const [tasks, setTasks]= useState(()=>{
      const savedTasks= localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks): []
    });
    const [input , setInput]= useState("");
    const [filter, setFilter]= useState("all");
    const[editingId, setEditingId]= useState(null);
    const [editTitle, setEditTitle] = useState("");

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
    function toggletask(id){
      setTasks((prev)=>prev.map((task)=>task.id===id ? {...task, completed:!task.completed}: task))
    }
    
    const filteredTasks= tasks.filter((task)=>{
      if(filter === "pending"){
        return task.completed === false;
      }
      if(filter === "completed"){
        return task.completed === true;
      }
      return true;
    })
    const completedCount = tasks.filter((task)=> task.completed === true).length;
    const totalCount = tasks.length;
    const pendingCount = tasks.length - completedCount;


    useEffect(()=>{
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks])

    function saveEdit(id){
      if(editTitle.trim()===""){
        alert ("Task title cannot be empty");
        return ;
      }
      setTasks((prev)=>
      prev.map((task)=>
      task.id === id ? {...task, title:editTitle.trim()}: task
    ))
    setEditingId(null);
    setEditTitle("");
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
      <ul>{filteredTasks.map((task)=>(
        <li key={task.id}>

          {editingId === task.id ? (<><input type="text" value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}/>
          
           <button onClick={()=>saveEdit(task.id)}>Save Changes</button>

           <button onClick={()=>{setEditingId(null);
             setEditTitle("")}}>Cancel editing</button>
            </> ) : 
          <span style={{textDecoration : task.completed ? "line-through" : "none"}}>{task.title}</span>
          }
        <p>Status: {task.completed ? "completed" : "not Completed"}</p>

        <button onClick={()=>removingTask(task.id)}>Remove</button>
        
        <button onClick={()=>toggletask(task.id)}>Mark Complete</button>

        <button onClick={()=>{setEditingId(task.id); setEditTitle(task.title)} }>Edit</button>

        </li>

        
      ))}</ul>
    </div>
    
        <button onClick={()=>setFilter("all")}>All</button>

        <button onClick={()=>setFilter("pending")}>Pending</button>

        <button onClick={()=>setFilter("completed")}>Completed</button>

        <p>All Tasks :- {totalCount}</p>
        <p>Completed Tasks : - {completedCount}</p>
        <p>Pending Tasks :- {pendingCount}</p>
        <button onClick={()=> {
          const confirmDelete= window.confirm("Are you sure you want to delete all tasks?");
          if(confirmDelete){
            setTasks([]);
          }
        }}>Clear All</button>
  </div>
    </>
  )
}

export default App
