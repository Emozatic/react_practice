import { useContext } from "react";
import CartContext from "../context/CartContext";
function Cart(){
    const {cart,removeFromCart}= useContext(CartContext);
    let startTotal=0;
    if(cart.length===0){
        return(<h1>Your Cart is Empty</h1>)
    }
    let totalValue= cart.reduce((total,item)=>{
       return total+ item.price * item.quantity
    },0
    )


    return(
        <>
        <h1>CART</h1>
        {cart.map((item)=>(
            <div key={item.id}>
                <img src={item.image} alt={item.title} />
                <h1>{item.title}</h1>
                <h2>Rs. {item.price}/piece</h2>
                <h2>Quantity: {item.quantity}</h2>
                {/* <h2>Total price:- {(item.price)*(item.quantity)}</h2> */}
                

                <button onClick={()=>removeFromCart(item.id)}>Remove</button>
            </div>
        ))}
        <h2>Total:- {totalValue}</h2>
        </>

    )
}
export default Cart;