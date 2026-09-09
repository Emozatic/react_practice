import { createContext } from "react";
const CartContext= createContext();
function ProductProvider({children}){
    const products=[
        {id:1, name:"Iphone", price:50000}, 
        {id:2, name:"Laptop", price:100000}, 
        {id:3, name:"Mouse", price:1000}
    ];
    return(
    <>
    <CartContext.Provider value={{products}}>{children}</CartContext.Provider>
    </>
)
}

export default ProductProvider;