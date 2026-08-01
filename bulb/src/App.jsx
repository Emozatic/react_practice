import { useState } from 'react'
import Bulb from './Bulb'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bulb/>
    </>
  )
}

export default App
