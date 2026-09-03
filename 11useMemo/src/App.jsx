import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum]= useState(0);

  function incNum(){
    setNum(num+1);
  }

  function incCount(){
    setCount(count+1);
  }

  function expensiveCalculation(num){
    console.log("function is running");
    return num*10;
  }
  
  let result= useMemo(()=>{
    console.log(expensiveCalculation(num))
  },[num])

  return (
    <>
    <h1>{result}</h1>
    <h2>{count}</h2>
    <h3>{num}</h3>
    <button onClick={incCount}>Inc</button>
    <button onClick={incNum}>Inc num</button>
          </>
  )
}

export default App
