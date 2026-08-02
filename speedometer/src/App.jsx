import { useState } from 'react'
import './App.css'
import Speedometer from './Speedometer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Speedometer/>
          </>
  )
}

export default App
