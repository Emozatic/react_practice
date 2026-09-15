import './App.css'
import Product from './components/Product'

function App(){
  let products= [
    {id:1, name:"Iphone 15" , price: 50000, category:"mobile"},
    {id:2, name:"HP laptop" , price: 100000, category:"Laptop"},
    {id:3, name:"Logitech Mouse" , price: 500, category:"Accessories"},
  ]

  function handleProductClick(product){
    console.log(product);
  }

  return (
    <>
     <h1>My E-commerce Website</h1>

    {products.map((item)=>(
      <>
      <div key={item.id}>
      <Product name= {item.name} price={item.price} category={item.category} id={item.id} handleProductClick={handleProductClick}/>
      </div>
      <hr />
      </>
    ))}
    </>
  )
}

export default App
