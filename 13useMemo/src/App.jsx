import { useState, useCallback, useMemo } from 'react'
import Child from './Child'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick= useCallback(()=>{
    console.log("hello");
  },[])
  function incCount(){
    setCount(incCount);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incCount}>Inc count</button>
    <Child onClick={handleClick}/>

    </>
  )
}

export default App
