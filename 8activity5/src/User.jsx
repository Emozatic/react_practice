import { useContext } from "react";
import ContextProvider from "./ContextProvider";
function User(){
    let obj= useContext(ContextProvider);
    console.log(obj);
    return(
    <>
    <h1>Name:{obj.name}</h1>
    <h1>Age:{obj.age}</h1>
    <h2>City: {obj.city}</h2>
    {/* <h1>{JSON.stringify(obj)}</h1> */}
    </>
    )
}
export default User;