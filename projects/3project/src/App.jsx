import './App.css'
import Product from './components/Product'

function App(){
  let products= [
    {id:1, name:"Iphone 15" , price: 50000, category:"mobile"},
    {id:2, name:"HP laptop" , price: 100000, category:"Laptop"},
    {id:1, name:"Logitech Mouse" , price: 500, category:"Accessories"},
  ]

  return (
    <>
     <h1>My E-commerce Website</h1>
    <Product products= {products}/>
    </>
  )
}

export default App
