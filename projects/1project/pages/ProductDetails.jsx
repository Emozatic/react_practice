import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function ProductDetails(){
    const {id}= useParams()
    const {products, cart, setCart}= useContext(CartContext)
    const product = products.find((item)=>item.id==Number(id));
    function addingInCart(){
        setCart((prev)=>{
            const updatedCart=[...prev, product]
        console.log("UPDATED cart", updatedCart)
        return updatedCart
        })
    
    }

    return(
        <>
    <h1>Product:-{product.name}</h1>
    <h2>{product.price}Rs.</h2>
    {/* <h2>Product Id:- {id}</h2> */}
    <button onClick={addingInCart}>Add to cart</button>
        </>
    )
}
export default ProductDetails;