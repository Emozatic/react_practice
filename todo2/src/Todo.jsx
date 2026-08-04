import { useState } from "react";
import {v4 as uuidv4} from "uuid";
function Todo(){
    const [todo, setTodo]= useState([{task:"sample-testing", id:uuidv4()}]);
    const [newTodo, setNewTodo]= useState("");

    let inpTodo=(event)=>{
        setNewTodo(event.target.value);
    }
    let settingTodo= ()=>{
        setTodo((previousTodo)=>{
            return[
                ...previousTodo, {task:newTodo, id: uuidv4()}
            ]
        })
        console.log(todo)
    }
    return(
        <>
        <input type="text" onChange={inpTodo} value={newTodo}/>
           <button onClick={settingTodo}>Submit</button>
           <ul>{todo.map((item)=>(
            <li key={item.id}>{item.task}</li>
           ))}</ul>
        </>
    )
}

export default Todo;