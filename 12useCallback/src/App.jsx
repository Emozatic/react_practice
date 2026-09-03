import { useState, useCallback} from 'react'

import './App.css'
function App() {
  const [count, setCount] = useState(0)
  const [num, setNum]= useState(0)


  function incCount(){
    setCount(count+1);
  }
  function incNum(){
    setNum(num+1);
  }
  let functioning= useCallback(()=>{
    console.log("handling function");
  },[])

  return (
    <>
      <h1>{count}</h1>
      <h2>{num}</h2>
      <button onClick={incCount}>Inc Count</button>
      <button onClick={incNum}>Inc Num</button>
          </>
  )
}

export default App
