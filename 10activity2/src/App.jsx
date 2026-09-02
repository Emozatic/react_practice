import { useState, useReducer} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useRef } from 'react'

const initial= ["apple", "mango", "litchi"];
const blank= []
function reducer(state, action){
  switch(action.type){
    case "add":
      return [...state, action.payload];

      case "remove":
        return state.filter((items)=>(
          items !== action.payload
        ));
        
        case "clear" :
        return []
  }
}
function App() {
  const [count, setCount] = useState(0)
  const inpRef= useRef();
  const [state, dispatch]= useReducer(reducer, blank);

  return (
    <>
    <input ref={inpRef}/>
      <ul>{state.map((values)=>(
        <li key={values}>{values}
        <button onClick={()=>{dispatch({type:"remove", payload:values})}}>Remove</button>
        </li>
      ))}</ul>
      <button onClick={()=>{dispatch({type:"add", payload:inpRef.current.value})}}>Add</button>
      <button onClick={()=>{dispatch({type:"clear"})}}>Clear</button>
    </>
  )
}

export default App
