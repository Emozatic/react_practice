import { useState } from "react"
import CartContext from "../context/CartContext";
function CartProvider({children}){
    const [cart,setCart] = useState([]);
    function addToCart(product){
        setCart((oldCart)=>[
            ...oldCart, product
        ])
    }
    return(
        <>
        <CartContext.Provider value={{cart,setCart, addToCart}}>{children}</CartContext.Provider>
        </>
    )
}
export default CartProvider