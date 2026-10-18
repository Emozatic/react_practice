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


    async function toggletask(id){
      const task = tasks.find((task)=>task._id === id);
      if(!task) return;
      try{
        const response = await fetch(`http://localhost:8000/api/tasks/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ completed: !task.completed })
        });
        if(!response.ok) throw new Error("Task not updated");
        const data = await response.json();
        setTasks((prev)=>prev.map((item)=>item._id === id ? data.task : item));
      }catch(err){
        console.error("Toggle error", err);
        alert("Task status not updated");
      }
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
        .then((res)=>{
          if(!res.ok) throw new Error("Tasks not fetched");
          return res.json();
        })
        .then((data)=>setTasks(data))
        .catch((err)=>console.error("Fetch error", err));
    },[])

    async function saveEdit(id){
      if(editTitle.trim()===""){
        alert("Task title cannot be empty");;
        return;
      }
      try{
        const response= await fetch(`http://localhost:8000/api/tasks/${id}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            title:editTitle.trim(),
          })
        })
        if(!response.ok){
          throw new Error ("Task not updated");
        }
        const data= await response.json();
        setTasks((prev)=>prev.map((task)=>task._id===id ? data.task:task));

        setEditingId(null);
        setEditTitle("");
      }catch(err){
        console.error("updated error", err);
        alert("Task not updated");
      }
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
        <li key={task._id}>

          {editingId === task._id ? (<><input type="text" value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}/>

           <button onClick={()=>saveEdit(task._id)}>Save Changes</button>   

           <button onClick={()=>{setEditingId(null);
             setEditTitle("")}}>Cancel editing</button>
            </> ) : 
          <span style={{textDecoration : task.completed ? "line-through" : "none"}}>{task.title}</span>
          }
        <p>Status: {task.completed ? "completed" : "not Completed"}</p>

        <button onClick={()=>removingTask(task._id)}>Remove</button>
        
        <button onClick={()=>toggletask(task._id)}>{task.completed ? "Mark Pending" : "Mark Complete"}</button>

        <button onClick={()=>{setEditingId(task._id); setEditTitle(task.title)} }>Edit</button>

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
