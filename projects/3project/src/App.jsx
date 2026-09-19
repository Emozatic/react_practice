import './App.css'
import Product from './components/Product'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App(){

  return (
    <>
     <Navbar/>

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
