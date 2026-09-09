import { useParams } from "react-router-dom";
import CartContext from "../context/CartContext";
import { useContext } from "react";

function ProductDetails({name, price}){
    const {id}= useParams
    const {products}= useContext(CartContext)
    return(
        <>
    <h1>Product:-{name}</h1>
    <h2>{price}Rs.</h2>
    {/* <h2>Product Id:- {id}</h2> */}
        </>
    )
}
export default ProductDetails;