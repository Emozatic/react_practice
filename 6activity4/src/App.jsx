import { useState } from 'react'
import './App.css'

function App() {
  const [form , setForm] = useState({
    name:"",
    age:"",
    email:"",
    terms:false,
    gender:"",
    country:""
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
    <select name="country" value={form.country} onChange={setting}>
      <option value="">Select Country</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="Japan">JAPAn</option>
    </select>
    <h3>{form.country}</h3>
          </>
  )
}

export default App
