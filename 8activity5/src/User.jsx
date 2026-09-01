import { useContext } from "react";
import ContextProvider from "./ContextProvider";
function User(){
    let obj= useContext(ContextProvider);
    console.log(obj);
    function inc(){
        obj.setData((prev)=>{
            return{
                ...prev, age:prev.age+1
            }
        })
    }
    function change(e){
        obj.setData((prev)=>({
            ...prev, city:e.target.value
     } ))
    }
    return(
    <>
    <h1>Name:{obj.data.name}</h1>
    <h1>Age:{obj.data.age}</h1>
    <input type="text" placeholder="enter to check live changes" name="city" onChange={change} />
    <h2>City: {obj.data.city}</h2>
    <button onClick={inc}>Inc Age</button>
    {/* <h1>{JSON.stringify(obj)}</h1> */}
    </>
    )
}
export default User;