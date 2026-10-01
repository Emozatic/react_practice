import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const product= [
    {id:1, name:"Iphone", price:70000},
    {id:2, name:"laptop", price:100000},
    {id:3, name:"Mouse", price:500}
  ]
  let lowBudget= product.filter((item)=>{
    item.price<=10000;
  })

  return (
    <>
      {/* <ul>{product.map((item)=>(
         <li>{item.name}</li>
      ))}</ul> */}

      <h2>filter</h2>
      <ul>{lowBudget.map((item)=>(
        <li>{item.name}</li>
      ))}</ul>
    </>
  )
}

export default App
