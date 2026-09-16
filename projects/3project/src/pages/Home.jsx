import { Link } from "react-router-dom";
function Home(){
    return (
        <>
        <h2>Home</h2>
        <Link to="/products">Back to Products</Link> 
        {/* Link do not reload the page it directly go to without reload */}
        </>
    )
}

export default Home;