import {useRef} from 'react';
function ChildA({setCount}){
    function change(e){
      setCount(e.target.value);
    }
    return(
    <input type="text" onChange={change}/>
    )
    
}
export default ChildA;