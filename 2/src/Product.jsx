function Product({title, price, features}){
    return(
        <>
        <h4>{title}</h4>
        <h5>{price}</h5>
        <h6>{features.join(", ")}</h6>
        </>
    )
}
export default Product;