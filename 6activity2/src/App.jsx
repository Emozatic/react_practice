import { useState } from 'react'

import './App.css'

function App() {
  const [form, setForm]= useState({
    name:"",
    age:"",
    email:""
  })


  function setData(e){
    setForm((prev)=>{
      return {
        ...prev, [e.target.name]:e.target.value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(form);
    
    setForm({
      name:"",
      age:"",
      emai:""
    })
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text"  placeholder='enter name' name='name' onChange={setData} value={form.name}/>
      <input type="text"  placeholder='enter your age' name='age' onChange={setData} value={form.age}/>
      <input type="text"  placeholder='enter your email' name='email' onChange={setData} value={form.email}/>
      <button type='submit'>Submit</button>
    </form>
     </>
  )
}

export default App
