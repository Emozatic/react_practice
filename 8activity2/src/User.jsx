import { useContext } from "react";
import UserContext from "./UserContext";
function User(){
    const username= useContext(UserContext)
    return(
        <h1>Hello {username}</h1>
    )
}