import ProductDetails from "./ProductDetails";
function Products(){
    let products= [{id:1, name:"Iphone", price:50000}, {id:2, name:"Laptop", price:100000}, {id:3, name:"Mouse", price:1000}];
    return(
        <>
        {products.map((item)=>{
            return(
            <ProductDetails name={item.name} price={item.price} id={item.id}/>
            )
        })}
        </>
    )
}
export default Products;