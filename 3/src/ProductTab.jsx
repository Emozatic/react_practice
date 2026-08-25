import Product from "./Product"
function ProductTab ({name,brand,price}){
    return(
        <>
        <Product name={name} brand={brand} price={price}/>
        </>
    )
}
export default ProductTab;