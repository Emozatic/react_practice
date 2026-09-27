import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [item, setItem]= useState(["apple", "mango", "banana"]);
  const [data, setData]= useState({name:"", age:0});
  function setting(){
    setItem((prev)=>([...prev, "litchi"]));
  }
  // function settingData(){
  //   setData((prev)=>({...prev, name:"Lucky", age:21}))
  // }
  function remove(){
    setItem((prev)=>prev.filter(item=>item.key!==item.idx))
  }

  return (
    <>

    <ul>{data.map((items,idx)=>(
      <li key={idx}>{items.name}
      <button onClick={remove}>Remove</button></li>
    ))}</ul>
    {/* <button onClick={settingData}>Add</button>
    <li>{data.name}</li>
    <li>{data.age}</li>
    <button onClick={settingData}>Add details</button> */}

    </>
  )
}

export default App
