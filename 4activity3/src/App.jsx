import './App.css'
import Product from './Product';

function App() {
  
let buttonClicked=()=>{
  console.log("Purchased");
}
  return (
    <>
  <Product name="Iphone" price={100000} inStock={true}/>
  <button onClick={buttonClicked}>Buy Now</button>
     </>
  )
}

export default App
