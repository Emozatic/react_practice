import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let student= {
      name:"Lucky",
      age:21,
      course: "MCA",
      college:"ICFAI"
     };
     localStorage.setItem("student",JSON.stringify(student));
     let data= JSON.parse(localStorage.getItem("student"))
     console.log(data);
  return (
    <>
     <h1>{data.name}</h1>
     <h2>{data.age}</h2>
     <h2>{data.course}</h2>
     <h2>{data.college}</h2>
         </>
  )
}

export default App
