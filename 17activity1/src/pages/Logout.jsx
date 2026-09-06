import { useNavigate, NavLink } from "react-router-dom";
function Logout(){
    return(
        <>
        <h1>Logout, Please Login</h1> 
        <NavLink to="/login">Login</NavLink>
        </>
    )
}
export default Logout;