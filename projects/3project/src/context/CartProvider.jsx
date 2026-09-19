import { useState, useEffect } from "react"
import CartContext from "./CartContext"
function CartProvider({children}){
const [cart,setCart]= useState(()=>{const savedCart= localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
})
        useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart))
},[cart])
    return(
        <>
        <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>
        </>
    )
}
export {CartProvider};
export default CartContext