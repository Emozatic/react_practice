import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [toggle, setToggle]= useState(false);
  function changeCount(){
    setCount(count+1)
  }
  function decCount(){
    // setCount((prev)=>prev-1)
    setCount(count-1)
  }
  function toggler(){
    if(toggle=== false){
      setToggle(!false);
    }
  }

  return (
    <>
      <h1>{count}</h1>
      <h1>{toggle}</h1>
      <button onClick={changeCount}>Inc Count</button>
      <button onClick={decCount}>Dec Count</button>
      <button onClick={toggler}>toggler</button>
    </>
  )
}

export default App
