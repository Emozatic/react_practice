import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [fruits, setFruits]= useState(["apple", "mango", "orange"]);
  function addFruit(){
    setFruits((prev)=>[
      ...prev, "Litchi"
    ])
  }
  function removeFruit(fruit){  
    setFruits((prev)=>prev.filter((item)=>item!==fruit))
  }


  return (
    <>
      <ul>{fruits.map((item)=>(

        <div>
          <li>{item}</li>
        <button onClick={()=>{removeFruit(item)}}>Remove</button>
        </div>
      ))}</ul>
      <button onClick={addFruit}>Add New Fruit</button>
    </>
  )
}

export default App
