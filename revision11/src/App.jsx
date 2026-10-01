import { useState, useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [product, setProduct]= useState("laptop");
  useEffect(()=>{
    console.log("effect ran");
  },[product])
  function changeProduct(){
    setProduct("Mobile");
  }
  function changeCount(){
    setCount(count+1);
  }

  return (
    <>
      <h1>{product}</h1>
      <h2>{count}</h2>
      <button onClick={changeCount}>Change count</button>
      <button onClick={changeProduct}>change</button>
    </>
  )
}

export default App
