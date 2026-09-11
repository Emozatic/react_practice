import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Cart(){
    const {products, cart, setCart}= useContext(CartContext)
    console.log("CART PAGE",cart)
    
    return(
        <>
        <h1>{cart.length}</h1>
        <h1>Your cart has:-</h1>
        <h2>{cart}</h2>
        </>
    )

}
export default Cart;