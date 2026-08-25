function Product({name, brand, price, inStock}){
    return(
        <>
        <h1>name:{name}</h1>
        <h1>brand:{brand}</h1>
        <h1>price:{price}</h1>
        <h1>inStock:{inStock?"yes":"no"}</h1>
        </>
    )
}
export default Product;