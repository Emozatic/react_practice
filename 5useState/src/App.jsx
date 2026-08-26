import { useState } from 'react'
import './App.css'

function App() {
const[count,setCount]=useState(0);
function increament(){
  setCount(count+1);
}
function dec(){
  if(count>0){
  setCount(count-1);
  }
  else{
    setCount("negative")
  }
}
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increament}>Inc</button>
      <button onClick={dec}>Decreament</button>

          </>
  )
}

export default App
