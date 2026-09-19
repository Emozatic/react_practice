import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
function ProductDetails(){

    const {id}= useParams();
    const navigate= useNavigate();
    const {cart, setCart} = useContext(CartContext);
    const [added, setAdded]= useState(false);
    const [quantity, setQuantity]= useState(1)

    let product= products.find((item)=>item.id === Number(id))

    if(!product){
        return <h1>Sorry, Not available</h1> 
    }

    function returnToMain(){
        navigate("/products")
    }

    function addToCart(){
        const existingProduct= cart.find((item)=>item.id===product.id)

        if(existingProduct){
            setCart(cart.map((item)=>item.id===product.id ? {...item, quantity:item.quantity+1} : item))
        }
        else{
        setCart((prev)=>
            [...prev, {...product, quantity:1}]
        )
    }
    setAdded(true);
    }

    return(
        <>
        <h1>Product Details</h1>
        <img src={product.image} alt={product.name}/>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <h2>{product.category}</h2>
        {/* <button onClick={addToCart}>Add to Cart</button> */}
        <button onClick={()=>{navigate("/cart")}}>Cart</button>
        <button onClick={returnToMain}>Back to Products</button>
        <button onClick={addToCart}>{added ? "Added to Cart" : "Add to Cart"}</button>

        </>
    )
}
export default ProductDetails;