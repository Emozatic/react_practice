import { useContext } from "react";
import UseContext from "./UseContext";
function User (){
    const username= useContext(UseContext)
    return(
        <h1>Hello {username}</h1>
    )
}
export default User