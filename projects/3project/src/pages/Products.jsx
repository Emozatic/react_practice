import Product from "../components/Product";
import products from "../data/products";
function Products(){
    
    return(
        <>
        <h1>Products page</h1>
        {products.map((item)=>(
            <Product 
            id= {item.id}
            name={item.name}
            price={item.price}
            category={item.category}
            />
        ))}

        </>
    )
}
export default Products;