import ProductDetails from "./ProductDetails"
function Product({name, price, category}){

    return(
        <>
        <h1>Poduct Card</h1>
        <ProductDetails name={name}/>
        <h2>{price}</h2>
        <h2>{category}</h2>
        </>
    )
}
export default Product;