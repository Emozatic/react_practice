import { useState } from 'react'
import './App.css'

function App() {
  const[form, setForm]= useState({
    name:"",
    age:"",
    email:"",
    terms:true
  })
  function editing(e){
    setForm((prev)=>{
      return{
        ...prev, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
      }
    })
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(form);
    
    setForm({
      name:"",
      age:"",
      email:"",
      terms:false
    })
  }

  return (
    <>
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder='enter name' name='name' value={form.name} onChange={editing}/>
    <input type="text" placeholder='enter age' name='age' value={form.age} onChange={editing}/>
    <input type="text" placeholder='enter email' name='email' value={form.email} onChange={editing}/>
    <input type="checkbox" name='terms' value={form.terms} onChange={editing}/>
    <button type='submit'>submit</button>
  </form>

      </>
  )
}

export default App
