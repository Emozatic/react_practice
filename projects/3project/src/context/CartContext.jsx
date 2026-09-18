import { createContext, useState, useEffect } from "react";
const CartContext= createContext();
const [cart,setCart]= useState(()=>{const savedCart= localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
})
export default CartContext;