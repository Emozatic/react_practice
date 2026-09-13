import { useEffect, useState } from "react"
import CartContext from "../context/CartContext";
function CartProvider({children}){
    const [cart,setCart] = useState(getInitialCart);

    function getInitialCart(){
        const savedCart= localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    }
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    },[cart])

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
    function decreaseQuantity(id){
        setCart((oldCart)=>{
            const exisiting= oldCart.find((item)=>item.id === id)
            if(exisiting.quantity===1){
                return oldCart.filter((item)=>item.id !== id);
            }
            return oldCart.map((item)=>
                item.id === id ? {...item, quantity:item.quantity-1} : item
            )
        })
    }
    return(
        <>
        <CartContext.Provider value={{cart,setCart, addToCart, removeFromCart, decreaseQuantity}}>{children}</CartContext.Provider>
        </>
    )
}
export default CartProvider