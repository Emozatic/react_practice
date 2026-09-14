import {  useState } from "react";
function Login(){
    const [data, setData]= useState({email:"", password:""})
    function change(e){
        setData((prev)=>({
            ...prev, [e.target.name]: e.target.value
    }))
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={data.email} onChange={change} name="email"/>
            <input type="text" value={data.password} onChange={change} name="password"/>
            <button type="submit">Login</button>
        </form>
    )
}
export default Login;