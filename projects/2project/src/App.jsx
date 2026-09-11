import "./App.css";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>


    </>
  )
}

export default App
