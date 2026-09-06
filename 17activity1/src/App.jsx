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
import ProtectedRoute from './pages/ProtectedRoute';
import Login from './pages/Login';
function App() {
  const [count, setCount] = useState(0)
  const [isloggedIn, setLoggedIn]= useState(false)

  return (
    <>
    {{isloggedIn} ? <h1>true</h1> : <h2>false</h2>}
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>

      <Route path='/about' element={<About/>}/>

      <Route path='/cart' element={<Cart/>}/>

      <Route path='/dashboard' element={<ProtectedRoute isLoggedIn={isloggedIn}><Dashboard/></ProtectedRoute>}/>

      <Route path='/login' element={<Login setLoggedIn= {setLoggedIn}/>}/>
      
      <Route path='*' element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>
        </>
  )
}

export default App
