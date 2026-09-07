//Login.jsx
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Login(){
    let {isLoggedIn, setIsLoggedIn}= useContext(AuthContext);
    console.log(`login, ${isLoggedIn}`)
    const navigate= useNavigate();
    function setting(){
        setIsLoggedIn(true)
        navigate("/dashboard")
    }

    return(
        <>
        <h1>Login</h1>
        <button onClick={setting}>Login</button>
        </>
    )
}       
export default Login