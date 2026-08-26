import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser]= useState({
    name:"Lucky",
    age:21,
    address:{
      city:"Chandigarh",
      pincode: 160001
    }
  })
  function changename(){
    setUser(prevUser=>({...prevUser, address:{...prevUser.address, city:"Kalka", pincode:173220}}))
  }

  return (
    <>
    <h1>{user.name}</h1>
    <h1>{user.age}</h1>
    <h1>{user.address.city}</h1>
    <h1>{user.address.pincode}</h1>
    <button onClick={changename}>change name</button>
      </>
  )
}

export default App
