import { useParams } from "react-router-dom";
import products from "../data/products";
function ProductDetails(){
    const {id}= useParams();
    let product= products.find((item)=>item.id === Number(id))
    console.log(product)
    return(
        <>
        <h1>Product Details</h1>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <h2>{product.category}</h2>
        </>
    )
}
export default ProductDetails;