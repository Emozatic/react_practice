import { useState } from 'react'
import UserContext from './UserContext';
import User from './User';
import './App.css'

function App() {
  const[name, setName]= useState({
    name:"Lucky",
    age:21
  });

  return (
    <>
    <UserContext.Provider value={{name, setName}}><User/></UserContext.Provider>
      </>
  )
}

export default App
