import { useNavigate } from "react-router-dom";

function Home(){
    const navigate= useNavigate();
    function goAbout(){
        navigate("/about");
    }
    return(
        <>
    <h1>Home route</h1>
    <button onClick={goAbout}>About</button>
    </>
    )
}
export default Home;