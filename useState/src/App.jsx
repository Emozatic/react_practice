import {useState} from "react";
import './App.css'

function App() {
  function init(){
    return Math.random();
  }
  const [count, setCount] = useState(init);
  let inCount=()=>{
    setCount(count+1);
    console.log(count);
  }

  return (
    <div>
  <h1>Count={count}</h1>
  <button onClick={inCount}>Inc</button>
    </div>
  )
}

export default App
