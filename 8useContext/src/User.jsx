import { useContext } from "react";
import UserContext from "./UserContent";

function User(){
    const username= useContext(UserContext)
    return(
        <h1>Hello{username}</h1>
    )
}
export default User;