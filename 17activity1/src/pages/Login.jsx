import { NavLink,useNavigate } from "react-router-dom";
function Login({setLoggedIn}){
    const navigate= useNavigate();
    function settingLogIn(){
        setLoggedIn(true)
        navigate("/dashboard")
        
        
    }
    return(
        <>
        <h1>Login Page</h1>
        <button onClick={settingLogIn}>Login</button>

        </>
    )
}
export default Login