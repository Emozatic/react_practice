import { useState } from 'react'
import UserContext from './ContextProvider'
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import './App.css'

function App() {
  
  let user= "Lucky";
  return (
    <>
    <UserContext.Provider value={user}>
      <Navbar/>
      <Dashboard/>
    </UserContext.Provider>
    </>
  )
}

export default App
