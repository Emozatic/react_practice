import { useState } from 'react'
import './App.css'
import UserContext from './UserContext';

function App() {

  return (
    <>
  <UserContext.Provider value="Lucky"></UserContext.Provider>
          </>
  )
}

export default App
