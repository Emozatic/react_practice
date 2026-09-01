import { useState } from 'react'
import UseContext from './UseContext';
import './App.css'
import User from "./User"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UseContext.Provider value="Lucky"><User/></UseContext.Provider>
          </>
  )
}

export default App
