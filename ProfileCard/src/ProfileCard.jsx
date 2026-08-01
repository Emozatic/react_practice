import Avtar from "./Avtar";
import Username from "./Username";
import Profession from "./Profession";
import Button from "./Button";
import "./ProfileCard.css"

function ProfileCard({username, profession}){
    return(
        <div className="container">
            <Avtar/>
            <Username username={username}/>
            <Profession profession={profession}/>
            <Button/>
        </div>
    )
}

export default ProfileCard;