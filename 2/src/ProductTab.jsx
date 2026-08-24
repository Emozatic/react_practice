import Product from "./Product";
import "./ProductTab.css"
function ProductTab({title,price,features}){
    return(
        <>
        <div className="container">
        <Product title={title} price={price} features={features}/>
        </div>
        </>
    )
}
export default ProductTab;