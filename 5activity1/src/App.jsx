import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name,setName]= useState("Lucky");

  function changeCount(){
    setCount(count+1);
  }
  function nameSetting(name){
    setName(name);
  }

  return (
    <>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button onClick={changeCount}>count inc</button>
      <button onClick={()=>nameSetting("Rahul")}>changeName</button>
          </>
  )
}

export default App
