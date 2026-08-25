import './App.css'
import Product from './Product';

function App() {
  
let buttonClicked=(brand)=>{
  console.log(`${brand} Purchased`);
}
  return (
    <>
  <Product name="Iphone" price={100000} inStock={true} clicked={buttonClicked}/>
  <Product name="samsung" price={20000} inStock={false} clicked={buttonClicked}/>
  <Product name="google" price={50000} inStock={true} clicked={buttonClicked}/>

  
     </>
  )
}

export default App
