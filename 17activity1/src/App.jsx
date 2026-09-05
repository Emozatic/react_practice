import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>

      <Route path='/about' element={<About/>}/>

      <Route path='/cart' element={<Cart/>}/>

      <Route path='/dashboard' element={<Dashboard/>}/>
      
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
        </>
  )
}

export default App
