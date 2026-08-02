import { useState } from "react";

function Todo(){
    const[todo, setTodo]= useState ([]);
    const [newTodo, setNewTodo]= useState("");

    let changetext=(event)=>{
        setNewTodo(event.target.value)
    }
    let settingTodo= (event)=>{
        setTodo([...todo, newTodo]);
    }
    return(
        <>
    <input type="text" onChange={changetext} />
    <ul>{todo.map((todo)=>(
        <li>{todo}</li>
    ))}</ul>
    <button onClick={settingTodo}>Add</button>
        </>
    )
}

export default Todo;