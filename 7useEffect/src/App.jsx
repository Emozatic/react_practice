import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'

function App() {
  const[count, setCount]= useState(0);
  const[user, setUser]= useState([])
  const[loading, setLoading]= useState(true);
//   useEffect(()=>{
//     console.log("Hello, World!");
// },[count]);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
    setUser(data);
    setLoading(false)
  })
},[])
  function inc(){
    setCount(count+1);
  }

  return (
    <>
    {loading ? (<h1>Loading...</h1>) : 
    <ul>{user.map((data)=>(
      <div key={data.id}>
      <li>{data.name}</li>
       <li>{data.email}</li>
        <li>{data.phone}</li>
        <li>{data.address.city}</li>
        <hr />
      </div>
    ))}</ul>
  }
      </>
  )
}

export default App
