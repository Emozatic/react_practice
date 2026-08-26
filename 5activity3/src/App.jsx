import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState({name:"Lucky", age:21})
  function changeName(newname){
    setState(prevState=>({
      ...prevState, name:newname
    }))
  }

  function changeCount(){
    setState((prevState)=>({
      ...prevState, age:prevState.age+1
    }))
  }

  return (
    <>
      <h1>{state.name}</h1>
      <h2>{state.age}</h2>
      <button onClick={()=>changeName("Rahul")}>changeName</button>
      <button onClick={changeCount}>changeAge</button>
    </>
  )
}

export default App
