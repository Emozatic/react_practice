import { useContext } from "react";
import UserContext from "./UserContext";
function User(){
    let username= useContext(UserContext);
    return(
        <h1>{username}</h1>
    )
}
export default User;