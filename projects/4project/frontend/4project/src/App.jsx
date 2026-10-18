import './App.css'
import { useState, useEffect } from 'react'


function App() {
    // const [tasks, setTasks]= useState(()=>{
    //   const savedTasks= localStorage.getItem("tasks");
    //   return savedTasks ? JSON.parse(savedTasks): []
    // });
    const [tasks, setTasks]= useState([]);
    const [input , setInput]= useState("");
    const [filter, setFilter]= useState("all");
    const[editingId, setEditingId]= useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [search, setSearch]= useState("");

    async function addingTask(){
      if(input.trim()===""){
        alert("please enter something in input");
        return;
      }
      try{
        const response= await fetch("http://localhost:8000/api/tasks", {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            title:input,
            completed:false
          })
        })
        if(!response.ok){
          throw new Error ("failed to add task");
        }
        const data= await response.json();

        setTasks((prev)=>[...prev, data.task]);
        setInput("");
      }
      catch(error){
        console.error("Error adding task:", error);
        alert("Task not added, check backend");
      }
      
    }
    
    async function removingTask(id){
      try{
        const response = await fetch(`http://localhost:8000/api/tasks/${id}`,
          {
            method:"DELETE",
          }
        );
        if(!response.ok){
          throw new Error("Task not deleted");
        }
        setTasks((prev)=>prev.filter((task)=>task._id !== id));
      }catch(err){
        console.log("Deletion Error", err);
        alert("Task not deleted!")
    }
  }


    function toggletask(id){
      setTasks((prev)=>prev.map((task)=>task.id===id ? {...task, completed:!task.completed}: task))
    }
    
    const filteredTasks= tasks.filter((task)=>{
     const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
     const matchesFilter= filter === "all" || (filter === "pending" && task.completed ===false) || (filter==="completed" && task.completed === true);

     return matchesSearch && matchesFilter;
    })
    const completedCount = tasks.filter((task)=> task.completed === true).length;
    const totalCount = tasks.length;
    const pendingCount = tasks.length - completedCount;


    useEffect(()=>{
      fetch("http://localhost:8000/api/tasks")
      .then((res)=>res.json())
      .then((data)=>setTasks(data))
      .catch((err)=>console.log(err))
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

    <div><p>Search</p> <input type="text" placeholder='Search Tasks...' value={search} onChange={(e)=>setSearch(e.target.value)}/></div>
    
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

        <button onClick={()=>removingTask(task._id)}>Remove</button>
        
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
