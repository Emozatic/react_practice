import { createContext, useState } from 'react'
import './App.css'
import  UserContext  from './UserContent'
import User from './User'

function App() {
  
  return (
    <>
      <UserContext.Provider value="Lucky"><User/></UserContext.Provider>
      

          </>
  )
}

export default App
