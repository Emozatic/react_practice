import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser]= useState([
    {id:1,  name:"Lucky", age:21},
    {id:2, name:"Rocky", age:19}
  ])

  function add(){
    setUser((prevuser)=>([
      ...prevuser, {id:3, name:"Aman", age:20}
    ]))
  }
  
  function del(id){
    setUser((prevuser)=>(
      prevuser.filter((items, i)=>(
       items.id !== id
      ))
    ))
  }
  function update(id){
    setUser((prevuser)=>(
      prevuser.map((banda)=>(
        banda.id == id ? {...banda, age: banda.age+1} : banda
      ))
    ))
  }

  return (
    <>
    <ul>{user.map((banda)=>(
      <div key={banda.id}>
      <li>{banda.name} - {banda.age} 

      <button onClick={()=>{del(banda.id)}}>del</button>
      <button onClick={()=>{update(banda.id)}}>Update</button>

      </li>
      </div>
       
    ))}</ul>
    <button onClick={add}>Add</button>
    </>
  )
}

export default App
