import { useContext } from "react";
import ProfileContext from "./ProfileContext";
function Profile(){
    let {name,age}= useContext(ProfileContext);
    return(
        <>
        <h1>Name:{name}</h1>
        <h1>Age: {age}</h1>
        </>
    )
}
export default Profile