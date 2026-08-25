import Product from "./Product"
function ProductTab ({name,brand,price,inStock}){
    return(
        <>
        <Product name={name} brand={brand} price={price} inStock={inStock}/>
        </>
    )
}
export default ProductTab;