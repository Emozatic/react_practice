import './App.css'
import Product from './components/Product'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App(){

  return (
    <>
     <h1>My E-commerce Website</h1>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/product/:id' element={<ProductDetails/>}/>
    <Route path='/cart' element={<Cart/>}></Route>
    </Routes>

   
  </>
  )

}

export default App
