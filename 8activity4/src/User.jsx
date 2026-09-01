import { useContext } from "react";
import UserContext from "./UserContext";
function User(){
    let {name,setName}= useContext(UserContext);
    function inc(){
        setName((prevUser)=>({
            ...prevUser, age:prevUser.age+1
    }))
    }
    return(
        <>
        <h1>Name:{name.name}</h1>
        <h2>Age: {name.age}</h2>
        <button onClick={inc}>Age+1</button>
        </>
    )
}
export default User;