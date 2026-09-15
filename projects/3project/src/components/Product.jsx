function Product({id, name, price, category, handleProductClick}){
    
    return(
        <>
            <h1>ID:- {id}</h1>
            <h1>Name:- {name}</h1>
            <h2>Price:- {price}</h2>
            <h2>Category:- {category}</h2>
            <button onClick={()=>{handleProductClick({id, name, price, category})}}>View {name}</button>
        </>
    )
}

export default Product;