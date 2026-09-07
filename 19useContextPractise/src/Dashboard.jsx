import { useContext } from "react";
import UserContext from "./ContextProvider";

function Dashboard(){
    let username= useContext(UserContext)
    return(
    <h1>dashboard :- {username}</h1>
    )
}
export default Dashboard;