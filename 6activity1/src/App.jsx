import { useState } from 'react'

import './App.css'

function App() {
  const [inp, setData]= useState({
    name:"",
    age:"",
    email:""
  })
  function setName(e){
    setData((prevInp)=>{
      return{
      ...prevInp, [e.target.name]:e.target.value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    setData({name:" ", age:" ",email:" "})
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='enter your name' value={inp.name} onChange={setName} name='name'/>
      <input type="text" placeholder='enter your name' value={inp.age} onChange={setName} name='age'/>
      <input type="text" placeholder='enter your name' value={inp.email} onChange={setName} name='email'/>
      <button type='submit'>Submit</button>
    </form>

      </>
  )
}

export default App
