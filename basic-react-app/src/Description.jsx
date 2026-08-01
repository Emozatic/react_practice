function Description ({title,price,features}){
    let isDiscount= price>=30000 ? `${price*(5/100)}(Discount 5%)`: `Sorry, No Discount`;
    let style= {backgroundColor= price>=30000 ? "yellow" : ""};
    return (
        <>
        <p>style={style} price={price}</p>
            <br />
            <p>features={features}</p>
            <p>Discout={isDiscount}</p>
        </>
    )
}

export default Description