//ProtectedRoute.jsx
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({children}){
    let {isLoggedIn, setIsLoggedIn}= useContext(AuthContext)
    console.log(isLoggedIn)
    let navigate= useNavigate();
    function navigateLogin(){
        navigate("/login")
    }
    function check(){
        if(isLoggedIn===true){
            return children;
        }
        else{
            return(
                <>
                <h1>Please, Login</h1>
                <button onClick={navigateLogin}>Login</button>
                </>
            )
            
        }
    }
    return check()
}
export default ProtectedRoute;