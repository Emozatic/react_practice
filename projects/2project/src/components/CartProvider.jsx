import { useState } from "react"
import CartContext from "../context/CartContext";
function CartProvider({children}){
    const [cart,setCart] = useState([]);
    function addToCart(product){
          setCart((oldCart)=>{
            const existingProduct=oldCart.find((item)=>item.id  === product.id);
            if(existingProduct){
              return oldCart.map((item)=>
                item.id === product.id ? {...item, quantity: item.quantity+1} : item
              )
            }
            return [...oldCart, {...product, quantity:1}]
          })  
    }
    function removeFromCart(id){
        setCart((oldCart)=>(
            oldCart.filter((item)=>(
                item.id!==id
            ))
        ))
    }
    return(
        <>
        <CartContext.Provider value={{cart,setCart, addToCart, removeFromCart}}>{children}</CartContext.Provider>
        </>
    )
}
export default CartProvider