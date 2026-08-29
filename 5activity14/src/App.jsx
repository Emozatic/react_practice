import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser]= useState([
    {id:1,  name:"Lucky", age:21},
    {id:2, name:"Rocky", age:19}
  ])

  return (
    <>
    <ul>{user.map((banda)=>(
      <div key={banda.id}>
      <li>{banda.name} - {banda.age}</li>
      </div>
       
    ))}</ul>
    </>
  )
}

export default App
