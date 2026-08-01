import { useState } from 'react'
import './App.css'
import Traffic from './Traffic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Traffic/>
          </>
  )
}

export default App
