let count = 1;
function doSomething(event){
    event.preventDefault;
    console.log(count++)
    console.log("event is ", event);
}

function Button(){
    return(
        <>
        <form action="">
        <input type="text" />
        <button onClick={doSomething}>Do something</button>
        </form>
        <p onMouseOver={doSomething}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quos repellat et modi vero. Illum sequi magnam mollitia, aliquam enim cumque, itaque totam autem dignissimos minima eos deserunt optio nostrum?</p>
        </>
    )
}

export default Button;