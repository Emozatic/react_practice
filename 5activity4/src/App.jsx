import { useState } from 'react'
import './App.css'

function App() {
  const [fruit, setFruit] = useState(["apple", "google"])
  function addFruit(){
    setFruit((prevFruit)=>[...prevFruit, "blackBerry"]);
  }

  return (
    <>
      <h1>{fruit.join(", ")}</h1>
      <button onClick={addFruit}>Add</button>
          </>
  )
}

export default App
