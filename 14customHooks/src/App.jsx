import { useState } from 'react'
import './App.css'

function App() {
  function useCounter(){
  const [count, setCount] = useState(0)
  function increase(){
    setCount(count+1)
  }
  return {count, increase}

  }
  let {count, increase}= useCounter();
  return (
    <>
     <h1>{count}</h1>
     <button onClick={increase}>Inc</button>
         </>
  )
}

export default App
