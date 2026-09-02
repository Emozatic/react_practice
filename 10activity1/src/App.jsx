import { useState,useReducer } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function reducer(state,action){
  if(action.type==="add"){
    return[
      ...state, action.payload
    ]
  }
  if(action.type==="remove"){
    return(
      state.filter((item)=>(
        item!==action.payload
      ))
    )
  }
  if(action.type==="clear"){
    return
      []
    
  }
}

function App() {
  let initial= ["Apple", "Mango", "Orange"];
  const[state, dispatch]= useReducer(reducer, initial);

  return (
    <>
    <button onClick={()=>dispatch({type:"add", payload:"Lucky"})}>Add</button>
    <ul>{state.map((values)=>(
      <li key={values}>{values}
      <button onClick={()=>{dispatch({type:"remove", payload:values})}}>Remove</button>
      </li>
    ))}</ul>
    <button onClick={()=>{dispatch({type:"clear"})}}>clear all</button>
      </>
  )
}

export default App
