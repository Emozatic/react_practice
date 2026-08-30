import { useState } from 'react'
import './App.css'

function App() {
  const [form , setForm] = useState({
    name:"",
    age:"",
    email:"",
    terms:false,
    gender:"",
    country:"",
    message:""
  })

  function setting(e){
    setForm((prev)=>{
      return {
        ...prev, [e.target.name]: e.target.value
      }
    })
  }

  function submission(e){
    e.preventDefault();
    if(form.name==""){
      console.log("enter a valid name");
    }
    if(form.age==""){
      console.log("enter a valid age")
      if(form.age<18){
        console.log("enter age above 18")
      }
    };

  }

  return (
    <>
    <form onSubmit={submission}>
      <input type="text" value={form.name} onChange={setting} placeholder='enter your name' name='name'/>
      <input type="text" value={form.age} onChange={setting} placeholder='enter your age' name='age'/>
      <input type="text" value={form.email} onChange={setting} placeholder='enter your email' name='email'/>
    <input type="textarea" value={form.message} onChange={setting} placeholder='enter your message' name='message'/>
    <select name="country" value={form.country} onChange={setting}>
      <option value="">Select Country</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="Japan">JAPAn</option>
    </select>
    <h3>{form.country}</h3>
    <h4>{form.message}</h4>
    <button type='submit'>Submit</button>
    </form>
          </>
  )
}

export default App
