import { useContext } from "react";
import CartContext from "../context/CartContext";

function Cart(){
    const {cart, setCart}= useContext(CartContext);
    function removeFromCart(product){
        
        setCart(cart.filter((item)=>item.id !== product.id ))
    }
    return(
        <>
        <h1>Cart</h1>
        {cart.map((item)=>(
            <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <h3>{item.category}</h3>
            <h3>{item.quantity}</h3>
            <button onClick={()=>{removeFromCart(item)}}>Remove</button>
            </div>
        ))}
        </>
    )
}
export default Cart;