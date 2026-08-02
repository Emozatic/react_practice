import { useState } from "react";

function Cart (){
    const [count, setCount]= useState({apple:0, mango:0, litchi:0});

    let appleCount=()=>{
        setCount((previousCount)=>{
            return{
                ...previousCount, apple:previousCount.apple+1
            }
        })
    }

    let mangoCount=()=>{
        setCount((previousCount)=>{
            return{
                ...previousCount, mango:previousCount.mango+1
            }
        })
    }

    let litchiCount=()=>{
        setCount((previousCount)=>{
            return{
                ...previousCount, litchi:previousCount.litchi+1
            }
        })
    }
    return (
        <>
        <h1>Cart</h1>
        <h2>{count.apple}</h2>
        <button onClick={appleCount}>Apple</button>

        <h1>mango</h1>
        <h2>{count.mango}</h2>
        <button onClick={mangoCount}>Mango</button>

        <h1>Cart</h1>
        <h2>{count.litchi}</h2>
        <button onClick={litchiCount}>Litchi</button>
        </>
    )
}

export default Cart;