import Product from "../components/Product";
import products from "../data/products";
import { useState } from "react";
function Products(){
    const [search, setSearch] = useState("")
    function searching(e){
        setSearch (e.target.value);
    }
    const filteredProducts= products.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()));
    
    return(
        <>
        <h1>Products page</h1>
        <input type="text" onChange={searching} value={search} placeholder="Search Product"/>
        {filteredProducts.map((item)=>(
            <Product 
            image={item.image}
            id= {item.id}
            name={item.name}
            price={item.price}
            category={item.category}
            />
        ))}

        </>
    )
}
export default Products;