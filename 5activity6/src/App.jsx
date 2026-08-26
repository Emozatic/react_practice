import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser]= useState({
    name:"Lucky",
    age:21,
    city:"chandigarh"
  })
  function changename(){
    setUser((prevUser)=>({...prevUser, name:"Rahul", age:22}))
  }

  return (
    <>
    <h1>{user.name}</h1>
    <h1>{user.age}</h1>
    <h1>{user.city}</h1>
    <button onClick={changename}>change name</button>
      </>
  )
}

export default App
