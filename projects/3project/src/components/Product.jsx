function Product({products}){
    console.log(products)
    let check= products.map((items)=>{
        console.log(items.name);
    })
    return(
        <>
        {products.map((item)=>(
            <div key={item.id}>
                <h1>ID:- {item.id}</h1>
                <h2> Name:- {item.name}</h2>
                <p>Price:- {item.price}</p>
                <p>Category:- {item.category}</p>
                <hr />
            </div>
        ))}
        </>
    )
}

export default Product;