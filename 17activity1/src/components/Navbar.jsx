import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "../pages/Home";

function Navbar(){
    return(
        <>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/about">About</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/dashboard">Dashboard</Link>
        
        </>
    )
}
export default Navbar;