import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const user={
    name:"Lucky",
    age:21,
    course:"MCA"
  }
  localStorage.setItem("user",JSON.stringify(user));
  const data=JSON.parse(localStorage.getItem("user"))
  console.log(data)


  return (
    <>
      {/* <h1>{localStorage.getItem("name")}</h1> */}
      <h2>{data.name}</h2>
          </>
  )
}

export default App
