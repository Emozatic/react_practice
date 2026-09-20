import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart(){
    const {cart, setCart}= useContext(CartContext);

    function removeFromCart(product){
        setCart(cart.filter((item)=>item.id !== product.id ))
    }

    function incQuantity(product){
        setCart(cart.map((item)=> item.id === product.id ? 
        {...item, quantity:item.quantity+1} : item))
        }

    function decQuantity(product){
        setCart(cart.map((item)=> item.id === product.id ? 
        {...item, quantity:item.quantity>1 ? item.quantity-1 : 1} : item))
        }

        let total= cart.reduce((total, item)=>{
            return total+item.price*item.quantity
        },0)

        function clearCart(){
            setCart([])
        }

        

    
    return(
        <>
        <h1>Cart</h1>
        {cart.length === 0 && <><h1>Your Cart is Empty</h1> <Link to="/products">Start Shopping</Link></>}
        {cart.map((item)=>(
            <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <h3>Category:- {item.category}</h3>
            <h3>Quantity:- <button onClick={()=>{incQuantity(item)}}>+</button>{item.quantity}<button onClick={()=>{decQuantity(item)}}>-</button></h3>
            <button onClick={()=>{removeFromCart(item)}}>Remove</button>
            <button onClick={clearCart}>Clear</button>
            <h4>Total:- {total}</h4>
        <Link to="/checkout">Checkout</Link>    
            </div>
        ))}
        
        </>
    )
}
export default Cart;