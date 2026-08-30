import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'

function App() {
  const[count, setCount]= useState(0);
  
//   useEffect(()=>{
//     console.log("Hello, World!");
// },[count]);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
  })
},[])
  function inc(){
    setCount(count+1);
  }

  return (
    <>
    
    <h1>{count}</h1>
    <button onClick={inc}>Inc</button>
      </>
  )
}

export default App
