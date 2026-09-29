import { useState } from 'react'
function App() {
  const [count, setCount]= useState(0);
  const [name, setName]= useState("Lucky");
  function incCount(){
    setCount((prev)=>prev+1);
  }
  function decCount(){
    setCount((prev)=>prev-1)
  }
  function changeName(){
    setName("Rahul");
  }
  

  return (
    <>
  <h1>{count}</h1>
  <h2>{name}</h2>
  <button onClick={incCount}>Inc Count</button>
  <button onClick={decCount}>Dec Count</button>
  <button onClick={changeName}>Change Name</button>

      </>
  )
}

export default App
