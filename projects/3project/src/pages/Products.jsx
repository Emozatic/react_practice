import Product from "../components/Product";
import products from "../data/products";
import { useState } from "react";
function Products(){
    const [search, setSearch] = useState("")
    const [category, setCategory]= useState("All");
    const [sort, setSort]= useState("default");

    function searching(e){
        setSearch (e.target.value);
    }

    const filteredProducts= products.filter((item)=> (item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()))&& (category==="All" || item.category === category));

    const sortedProducts= [...filteredProducts].sort((a,b)=>{if(sort === "low"){return a.price-b.price}
    if(sort==="high"){return b.price-a.price}
    return 0;
})
    function filteration(e){
        setCategory(e.target.value)
    }
    function sorting(e){
        setSort(e.target.value);
    }


    
    return(
        <>
        <h1>Products page</h1>
        <select name="" id="" value={category} onChange={filteration}>
            <option value="All">All</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Accessories">Accessories</option>
            <option value="Audio">Audio</option>
        </select>

        <select name="" id="" value={sort} onChange={sorting}>
            <option value="default">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
        </select>



        <input type="text" onChange={searching} value={search} placeholder="Search Product"/>
        {sortedProducts.length===0 && (<p>No product found</p>)}
        {sortedProducts.map((item)=>(
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