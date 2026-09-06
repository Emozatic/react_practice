import { NavLink, Outlet } from "react-router-dom";
function ProtectedRoute({isLoggedIn,children}){
    if(isLoggedIn){
        return children
    }else{
        
        return (
            <>
        <h1>Please Login</h1>
        <NavLink to="/login">Login</NavLink>
        </>
    )
        
    }
}
export default ProtectedRoute;