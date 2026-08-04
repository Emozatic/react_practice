import { useState } from "react";
import {v4 as uuidv4} from "uuid";

function Todo(){
    const[todo, setTodo]= useState ([{task:"sample", id:uuidv4()}]);
    const [newTodo, setNewTodo]= useState(""); 
       
    let changetext=(event)=>{
        setNewTodo(event.target.value)
    }
    let settingTodo=()=>{
        setTodo((prevTodo, ))
    }
   
    return(
        <>
    <input type="text" onChange={changetext} />
    <ul>{todo.map((todo)=>(
        
        <li key={todo.id}>{todo.task}</li>
        
    ))}</ul>
    <button onClick={settingTodo}>Add</button>
        </>
    )
}

export default Todo;