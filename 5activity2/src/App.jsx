import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function changeCount(count){
    setCount((prevCount)=>{
     return prevCount+(count);
    })
  }

  return (
    <>
    <h1>{count}</h1>
      <button onClick={()=>changeCount(1)}>+1</button>
    <button onClick={()=>changeCount(5)}>+5</button>
    <button onClick={()=>changeCount(-1)}>-1</button>
          </>
  )
}

export default App
