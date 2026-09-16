import { use } from "react";
import { useNavigate } from "react-router-dom";
function Product({name, id, price, category, image}){
    const navigate= useNavigate();
    function viewDetails(id){
        navigate(`/product/${id}`)
    }
        
    return(
        <>
            <div key={id}>
                <img src={image} alt={name} />
                <h1>ID:- {id}</h1>
                <h1>{name}</h1>
                <h2>{price}</h2>
                <h2>{category}</h2>
                <button onClick={()=>{viewDetails(id)}}>View {name}</button>
            </div>
        </>
    )
}

export default Product;