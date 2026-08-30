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

  return (
    <>
    <input type="textarea" value={form.message} onChange={setting} placeholder='enter your message' name='message'/>
    <select name="country" value={form.country} onChange={setting}>
      <option value="">Select Country</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="Japan">JAPAn</option>
    </select>
    <h3>{form.country}</h3>
    <h4>{form.message}</h4>
    
          </>
  )
}

export default App
