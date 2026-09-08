//Dashboard.jsx
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Dashboard(){
    const {isLoggedIn, setIsLoggedIn}= useContext(AuthContext)
    const navigate= useNavigate();
    function logoutSetting(){
        localStorage.removeItem("status")
        
        setIsLoggedIn(false);
        localStorage.setItem("status",false)
        navigate("/login")
    }
    return(
        <>
        <h1>Welcome to DashBoard</h1>
        <button onClick={logoutSetting}>Logout</button>
        </>
    )
}
export default Dashboard;