import ProductDetails from "./ProductDetails";
import { useNavigate, useParams } from "react-router-dom";
function Products(){
    let products= [{id:1, name:"Iphone", price:50000}, {id:2, name:"Laptop", price:100000}, {id:3, name:"Mouse", price:1000}];
    const navigate= useNavigate();
        
    
    return(
        <>
        {products.map((item)=>{
            return(
            <>
            <div key={item.id}> 
                <ProductDetails name={item.name} price={item.price} id={item.id} />
            <button onClick = {()=>navigate(`/products/${item.id}`)}>view:- {item.name}</button>
            </div>
            </>
            
            )
        })}
        </>
    )
}
export default Products;