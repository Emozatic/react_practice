import { useState, useReducer } from 'react'
import './App.css'

let initialState=0;

  function reducer(state,action){
    // if(action.type==="increase"){
    //   return state+ action.payload;
    // }
    // if(action.type==="decrease"){
    //   return state-action.payload;
    // }
    if(action.type==="changeName"){
      return {
        ...state, name:action.payload
      }
    }
    if(action.type==="increase"){
      return{
        ...state, age:action.payload+state.age
      }
    }
    return state;
  }



function App() {
  const initial= {
    name:"Rahul",
    age: 21
  }
  
  const[state, dispatch]= useReducer(reducer, {name:"Rahul", age:21})
  return (
    <>
  
    <h2>{state.name}</h2>
    <h2>{state.age}</h2>
      <button onClick={()=>{dispatch({type:"increase",payload:1})}}>IncAgex</button>
      
      <button onClick={()=>{dispatch({type:"changeName", payload:"Lucky"})}}>ChangeName</button>
          </>
  )
}

export default App
