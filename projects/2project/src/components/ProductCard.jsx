import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
function ProductCard({product}){
    const {addToCart}= useContext(CartContext)
    return(
          <>
          <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <h2>{product.category}</h2>
            <h2>₹{product.price}</h2>
            <Link to={`/products/${product.id}`}>View Details</Link>
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
          </>
    )
}
export default ProductCard;