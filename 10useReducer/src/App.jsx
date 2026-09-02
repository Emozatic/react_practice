import { useState, useReducer } from 'react'
import './App.css'

let initialState=0;

  function reducer(state,action){
    if(action.type==="increase"){
      return state+1;
    }
    if(action.type==="decrease"){
      return state-1;
    }
    return state;
  }



function App() {
  
  const[state, dispatch]= useReducer(reducer, initialState)
  return (
    <>
    <h1>{state}</h1>
      <button onClick={()=>{dispatch({type:"increase"})}}>Inc</button>
      <button onClick={()=>{dispatch({type:"decrease"})}}>dec</button>
          </>
  )
}

export default App
