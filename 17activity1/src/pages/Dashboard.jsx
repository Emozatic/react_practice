import { useNavigate } from "react-router-dom";
function Dashboard({setLoggedIn}){
    const navigate= useNavigate();
    function logout(){
        setLoggedIn(false);
        navigate("/logout")
    }

    return(
        <>
        <h1>Dashboard</h1>
        <button onClick={logout}>Logout</button>
        </>
    )
}

export default Dashboard;