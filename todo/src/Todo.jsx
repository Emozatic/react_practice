import { useState } from "react";

function Todo(){
    const[todo, setTodo]= useState(["sample Test"]);
    const [newTodo, setNewTodo]= useState("");

    let addNewTodo=()=>{
        setTodo([...todo, setTodo]);
        setNewTodo(" ");
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }
    return(
        <>
    <input type="text" value={newTodo} onchange={updateTodoValue}/>
    <br /><br />
    <button onClick={addNewTodo}>Add new Todo</button>
    <br /><br />
    <h4>Task todo</h4>
    <ul>
        {todo.map((todo)=>(
            <li>{todo}</li>
        ))}
    </ul>
        </>
    )
}

export default Todo;