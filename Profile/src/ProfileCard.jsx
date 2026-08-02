import { useState } from "react";

function ProfileCard(){
    const [user, setUser]= useState({name:"Lucky", profession:"Student", city:"Parwanoo"});
    let change=()=>{
        setUser({
            ...user , profession:"Developer"
        })

        setUser({
            ...user , profession:"Developer2"
        })

        setUser({
            ...user , name :"Rocky"
        })
    }
    return(
        <>
        <h1>{user.name}</h1>
        <h1>{user.profession}</h1>
        <h1>{user.city}</h1>
        <button onClick={change}>Change</button>
        </>
    )
}

export default ProfileCard;

