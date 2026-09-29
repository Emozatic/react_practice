import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData]= useState("");
  function setting(e){
    setData(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(form);
  }


  return (
    <>
      <h1>{data}</h1>
      
      <form onSubmit={handleSubmit}>
    <input type="text" value={data.name} onChange={setting} name='data'/>
    <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
