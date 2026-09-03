import { useState } from 'react'
import './App.css'
import ChildA from './ChildA'
import ChildB from './ChildB'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChildA setCount={setCount}/>
    <ChildB count={count}/>
    </>
  )
}

export default App
