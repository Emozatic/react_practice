function ChildA({setCount}){
    function changeCount(e){
        setCount((e.target.value)*2)
    }
    return(
    <input type="number" onChange={changeCount}/>
    )
}
export default ChildA;