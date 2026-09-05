import { useNavigate } from "react-router-dom";

function Contact(){
    const navigate= useNavigate();
    function goHome(){
        navigate("/")
    }
    return(
        <>
    <h4>91xxxxx90</h4>
    <button onClick={goHome}>Home</button>
        </>
    )
}
export default Contact;