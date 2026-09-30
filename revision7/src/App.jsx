import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts]= useState([
    {id:1, name:"Apple", price:10000},
    {id:2, name:"Laptop", price:500000}
  ])
  function addProducts(){
    setProducts((prev)=>[...prev,{
        id:3, name:"KeyBoard", price:1000
    }])
  }
  function remove(product){
    setProducts((prev)=>prev.filter((item, id)=>id!==product.id))
  }
  function updatePrice(product){
    setProducts((prev)=>prev.map((item)=>item.id===2 ? {...item, price:550000} : item))
  }


  return (
    <>
    <ul>{products.map((items)=>(
      <div key={items.id}>
        <li>{items.name}</li>
        <li>{items.price}</li>
        <button onClick={()=>{remove(items)}}>Remove</button>
        <button onClick={()=>{updatePrice(items)}}>Update Price</button>
      </div>
    ))}</ul>
    <button onClick={addProducts}>Add</button>
    

      
    </>
  )
}

export default App
