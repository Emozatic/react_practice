import { useState } from 'react'

import './App.css'

function App() {
  const [forms, setForm]= useState({
    name:"",
    age:"",
    email:"",
    gender:"",
    country:"",
    message:"",
    terms:true
  })

  function editing(e){
    setForm((prev)=>{
      return{
        ...prev, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
      }
  })
  }
  function submission(e){
    e.preventDefault();
    if(forms.name===""){
      console.log("enter a valid name");
      return;
    }
    if(forms.age === "" && forms.age<18){
      console.log("enter a valid age greater or equal to 18");
      return;
    }
    if(forms.email===""){
      console.log("enter a valid mail");
      return;
    }
    if(forms.gender===""){
      console.log("gender required");
      return;
    }
    if(forms.country===""){
      console.log("select a valid country");
      return;
    }
    if(forms.message===""){
      console.log("enter a msg");
      return;
    }
    if(!forms.terms){
      console.log("please accept terms")
      return;
    }
    console.log(forms)
  }

  return (
    <>
  <form onSubmit={submission}>
    <input type="text" name='name' onChange={editing} value={forms.name} placeholder='etner a valid name'/>
    <input type="text" name='age' onChange={editing} value={forms.age} placeholder='etner a valid age'/>
    <input type="text" name='email' onChange={editing} value={forms.email} placeholder='etner a valid email'/>
    <label htmlFor="gender">Male</label>
      <input type="radio" name='gender' onChange={editing} value="male"/>
      <label htmlFor="gender">Female</label>
      <input type="radio" name='gender' onChange={editing} value="female"/>
      <select name="country" onChange={editing} value={forms.country}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="japan">JAPAN</option>
      </select>
      <input type="text" name='message' onChange={editing} value={forms.message} placeholder='enter feedback'/>
      <input type="checkbox" name='terms' onChange={editing} checked={forms.terms}/>
    <button type='submit'>Submit</button>
  </form>
          </>
  )
}

export default App
