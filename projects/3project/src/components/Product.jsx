function Product({id, name, price, category, handleProductClick}){
    // function viewDetails(name){
    //     console.log(`${name} clicked`);
    // }
    return(
        <>
        {/* {products.map((item)=>(
            <div key={item.id}>
                <h1>ID:- {item.id}</h1>
                <h2> Name:- {item.name}</h2>
                <p>Price:- {item.price}</p>
                <p>Category:- {item.category}</p>
                <button onClick={()=>{viewDetails(item)}}>View Details</button>
                <hr />
            </div>
        ))} */}
            <h1>ID:- {id}</h1>
            <h1>Name:- {name}</h1>
            <h2>Price:- {price}</h2>
            <h2>Category:- {category}</h2>
            <button onClick={()=>{handleProductClick(name)}}>View {name}</button>
        </>
    )
}

export default Product;