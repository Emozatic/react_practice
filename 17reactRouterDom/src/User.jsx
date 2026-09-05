import { useParams } from "react-router-dom"

function User(){
    let {id}= useParams();
    return(
        <h1>User:- Lucky, Id: {id}</h1>
    )
}
export default User;