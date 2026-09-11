import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
function Products(){
    return(
        <>
        {products.map((item)=>(
          <div key={item.id}>
            <ProductCard product={item}/>
          </div>
        ))}
        </>
    )
}
export default Products;