import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
function Products(){
    let {products}= useContext(CartContext)
    console.log(products)
    const navigate= useNavigate();
        
    
    return(
        <>
        {products.map((item)=>{
            return(
            <>
            <div key={item.id}> 
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
            <button onClick = {()=>navigate(`/products/${item.id}`)}>view:- {item.name}</button>
            </div>
            </>
            
            )
        })}
        </>
    )
}
export default Products;