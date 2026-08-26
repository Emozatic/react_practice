import { useState } from 'react'
import './App.css'

function App() {
const[count,setCount]=useState(0);
function increament(){
  setCount(count+1);
}
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increament}>Inc</button>

          </>
  )
}

export default App
