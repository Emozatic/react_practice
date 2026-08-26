import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState([
    {name:"Apple", price:100},
    {name:"Samsung", price:200}
  ])
  function count(){
    setState((prev)=>({...prev, prev}))
  }


  return (
    <>
      
    </>
  )
}

export default App
