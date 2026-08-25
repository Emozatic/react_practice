function ProductCard({title, price, features}){
    return(
        <>
        <h3>{title}</h3>
        <p>{price}</p>
        <ul>{features.map((feature,index)=>(
            <li key={index}>{feature}</li>
        ))}</ul>
        </>
    )
}

export default ProductCard;