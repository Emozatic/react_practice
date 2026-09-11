import { useContext } from "react";
import CartContext from "../context/CartContext";
function Cart(){
    const {cart}= useContext(CartContext);
    if(cart.length===0){
        return(<h1>Your Cart is Empty</h1>)
    }

    return(
        <>
        <h1>CART</h1>
        {cart.map((item)=>(
            <div key={item.id}>
                <img src={item.image} alt={item.title} />
                <h1>{item.title}</h1>
                <h2>Rs. {item.price}</h2>
            </div>
        ))}
        </>

    )
}
export default Cart;