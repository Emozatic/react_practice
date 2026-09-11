import { useParams } from "react-router-dom"
import { products } from "../data/products";
function ProductDetails(){
    const {id}= useParams();
    const product= products.find((item)=>
        item.id===Number(id)
    )
    if(!product){
        return(<h1>This item is no longer available</h1>)
    }
       
    

    return(
        <>
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <h2>{product.category}</h2>
        <h2>₹{product.price}</h2>
        </>
    )
}

export default ProductDetails