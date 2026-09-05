import {useNavigate, useParams} from "react-router-dom";
function ProductDetails(){
    let navigate= useNavigate();
    function goProducts(){
        navigate("/products");
    }
    let {id}= useParams()
    return(
        <>
        <button onClick={goProducts}>Go to Products</button>
        <h1>Product id: {id}</h1>
        </>
    )
}
export default ProductDetails;
