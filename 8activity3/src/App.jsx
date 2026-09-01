import { useState } from 'react'
import ProfileContext from './ProfileContext'
import Navbar from './Navbar'
import Profile from './profile'
import './App.css'

function App() {
  

  return (
    <>
    <ProfileContext.Provider value={{
      name:"Lucky",
      age:21
    }}><Profile/></ProfileContext.Provider>
    <Navbar/>
      </>
  )
}

export default App
