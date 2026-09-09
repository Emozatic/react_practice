function ProductDetails({name,price,id}){
    return(
        <>
    <h1>Product:-{name}</h1>
    <h2>{price}Rs.</h2>
    <h2>Product Id:- {id}</h2>
        </>
    )
}
export default ProductDetails;