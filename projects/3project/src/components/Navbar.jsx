import CartContext from "../context/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);
  const cartCount = cart?.length || 0;

  return (
    <>
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>MyShop</h2>
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to ="/products">Products</NavLink>
        <NavLink to="/cart" className="cart-link" >
          Cart {cart.reduce((total,item)=>total + item.quantity, 0)}
          <span className="cart-badge">{cartCount}</span>
        </NavLink>
      </div>
    </nav>
    </>
  );
}

export default Navbar;