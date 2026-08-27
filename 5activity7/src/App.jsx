import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser]= useState({
    name:"Lucky",
    age:21,
    address:{
      city:"chandigarh",
      pincode:173220
    }
  })

  function changeProfile(){
    setUser(prevUser=>({
      name:"Rahul",
      age:22,
      address:{
        city:"delhi",
        pincode:110001
      }
    }))
  }

  // function changeProfile(){
  //   setUser((prevUser)=>({
  //     ...prevUser, name:"Rahul", age:20,
  //     address:{
  //       ...prevUser.address, city:"kalka", pincode:173220
  //     }
  //   }))
  // }

  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.address.city}</h1>
      <h1>{user.address.pincode}</h1>
      <button onClick={changeProfile}>change</button>
    </>
  )
}

export default App
