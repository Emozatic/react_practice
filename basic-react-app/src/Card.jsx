import Title from "./Title"
import Description from "./Description"
import "./Card.css"
function Card ({title,price, features}){
    return(
        <div className="container">
            <Title title={title}/>
            <Description price={price} features={features.join(", ")}/>
        </div>
    )
}
export default Card;