import { useContext } from "react";
import UserContext from "./UserContext";
function User(){
    let user= useContext(UserContext);
    return(
        <>
        <h1>Name:{user.name}</h1>
        <h2>Age: {user.age}</h2>
        </>
    )
}
export default User;