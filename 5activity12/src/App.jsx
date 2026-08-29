import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser]= useState({
    name:"Lucky",
    age:21,
    city:"Chandigarh"
  })
  function update(){
    setUser((prevUser)=>({
      ...prevUser, age:22
      
    }))
  }

  return (
    <>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user.city}</h3>
      <button onClick={update}>Update</button>
      
          </>
  )
}

export default App
