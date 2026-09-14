import './App.css'
import Product from './components/Product'

function App(){

  return (
    <>
     <h1>My E-commerce Website</h1>
    <Product name="Iphone" price={100000} category="electronics"/>
    <hr />
    <Product name="Laptop" price={29999} category="electronics"/>
    <hr />
    <Product name="Shirt" price={299} category="fashion"/>
    </>
  )
}

export default App
