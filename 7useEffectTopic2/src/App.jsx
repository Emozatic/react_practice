import { useState } from 'react';
import {useEffect} from 'react'
import './App.css'

function App() {
  const[user, setUser] =useState([]);
  const[err, setErr]= useState("");
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    async function getUser(){
      try{
        const res= await fetch("https://jsonplaceholder.typicode.com/users");
        const data= await res.json();
        setUser(data);
        setLoading(false);
      }catch(error){
        setErr(error.message);
        setLoading(false)
      }
    }
    getUser()
  },[])
  

  return (
    <>
    {loading ? (<h1>Loading...</h1>) : err ? (<h2>{err}</h2>) : 
    <ul>{user.map((data)=>(
      <li key={data.id}>{data.name}</li>
    ))}</ul>
    }
    </>
  )
}

export default App
