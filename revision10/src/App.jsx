import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function incCount(){
    setCount(count+1);
  }
  useEffect(()=>{
    console.log("count increased");
  })

  return (
    <>
      <h1>UseEffect</h1>
      <h2>{count}</h2>
      <button onClick={incCount}>Inc Count</button>
          </>
  )
}

export default App
