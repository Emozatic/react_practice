import {useParams, useNavigate, Link} from "react-router-dom";
function Products(){
    return(
        
        <>
        <h1>Laptop</h1>
        <Link to="/product/101">View Details</Link>

        <h1>Iphone</h1>
        <Link to="/Product/102">View Details</Link>

        <h1>Desktop</h1>
        <Link to="/Product/103">View Details</Link>
        </>
    )
}
export default Products;
