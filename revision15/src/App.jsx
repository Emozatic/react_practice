import { useState, useReducer } from 'react'
const initialstate= 0;
  function reducer(state, action){
    if(action.type==="inc"){
      return state+1
    }
    if(action.type==="dec"){
      return state-1
    }
  }
function App() {
  const [count, setCount] = useState(0)
  
  const[state, dispatch]= useReducer(reducer, initialstate)
  return (
    <>
      <h1>{state}</h1>
      <button onClick={()=>{dispatch({type:"inc"})}}>Inc</button>
      <button onClick={()=>{dispatch({type:"dec"})}}>Dec</button>
    </>
  )
}

export default App
