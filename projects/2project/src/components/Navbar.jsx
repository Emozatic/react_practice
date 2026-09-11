import { NavLink } from "react-router-dom";
import "./Navbar.css"
function Navbar(){


    return(
        <nav><ul>
             <li><NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
        <li><NavLink to={"/products"} className={({ isActive }) => (isActive ? "active" : "")}>Products</NavLink></li>
        <li><NavLink to={"/cart"} className={({ isActive }) => (isActive ? "active" : "")}>Cart</NavLink></li>
        <li><NavLink to={"/login"} className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink></li>
        </ul>
        </nav>
    )
}
export default Navbar;