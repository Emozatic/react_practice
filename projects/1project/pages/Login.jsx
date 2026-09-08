//Login.jsx
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Login(){
    let {isLoggedIn, setIsLoggedIn, user, setUser}= useContext(AuthContext);
    console.log(`login, ${isLoggedIn}`)
    const navigate= useNavigate();
    function setting(){
        setUser("Lucky")
        setIsLoggedIn(true)
        
        console.log(`user in Loginn ${user}`)
        localStorage.removeItem("status")
        localStorage.setItem("status", true)
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