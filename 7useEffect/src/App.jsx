import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'

function App() {
  const[count, setCount]= useState(0);
  const[user, setUser]= useState([])
//   useEffect(()=>{
//     console.log("Hello, World!");
// },[count]);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
    setUser(data);
  })
},[])
  function inc(){
    setCount(count+1);
  }

  return (
    <>
    
    <ul>{user.map((data)=>(
      <li key={data.id}>{data.name}</li>
    ))}</ul>
      </>
  )
}

export default App
