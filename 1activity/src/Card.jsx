import Title from "./Title";
import Description from "./Description";
import Image from "./Image";
import "./Card.css";

function Card(){
    return(
        <div className="container">
            <Image/>
            <Title/>
            <Description/>
            
        </div>
    )
}
export default Card;