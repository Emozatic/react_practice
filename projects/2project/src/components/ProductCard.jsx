import { Link } from "react-router-dom";
function ProductCard({product}){
    return(
          <>
          <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <h2>{product.category}</h2>
            <h2>₹{product.price}</h2>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </>
    )
}
export default ProductCard;