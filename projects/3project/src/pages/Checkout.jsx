import CartContext from "../context/CartContext";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Checkout(){
    const {cart}= useContext(CartContext);
    const [form, setForm]= useState({name:"", address:"", phone:""})
    const [ordered, setOrdered]=useState(false)
    const total= cart.reduce((total,item)=>{
        return total + item.price*item.quantity
    },0)

    function setValues(e){
        setForm({...form, [e.target.name]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!form.name || !form.address || !form.phone){
            alert("Please fill the all Details")
            return;
        }
        setOrdered(true);
        console.log(form);
    }
    return(
        <div>
            <h1>Checkout</h1>
            <p>Order Summary</p>
            {cart.map((item)=>(
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>Price:= Rs. {item.price}</p>
                    <p>Quantity:- {item.quantity}</p>
                </div>
            ))}
            <p>Total: -{total}</p>

            <h4>Fill Details:-</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" value={form.name} onChange={setValues} name="name"/>
                <input type="text" placeholder="Address" value={form.address} onChange={setValues} name="address"/>
                <input type="tel" placeholder="Phone Number" value={form.phone} onChange={setValues} name="phone"/>
                <button type="submit">Place Order</button>
            </form>
            {ordered && <><h1>Order Placed Successfully</h1> <Link to="/products">Back to Product</Link></>}
        </div>
    )
}

export default Checkout;