import CartContext from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);
  const cartCount = cart?.length || 0;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>MyShop</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to ="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          Cart {cart.reduce((total,item)=>total + item.quantity, 0)}
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;