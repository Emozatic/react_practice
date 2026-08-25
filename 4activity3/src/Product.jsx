function Product({name,price,inStock, clicked}){
    return(
        <>
    <h1>Name:{name}</h1>
    <h2>Price:{price}</h2>
    <h2>Instock:{inStock?"available":"not available"}</h2>
    {inStock && <button onClick={()=>clicked(name)}>Buy Now</button>}
        </>
    )
}
export default Product;