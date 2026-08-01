import {useState} from "react";
function Bulb(){
     let [isOn, setBulb] = useState(false);
     function changeBulb(){
        setBulb(!isOn)
     }
     return(
        <>
        <h1>{isOn ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzc0OXxegVvpDrt7ES5UI1kxofOistcMN4RjnNFolwuQ&s=10" alt="on bulb" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jCeHOTmgJK_xidn_zxPjVqFOwBZqLxSAvPIoaxGivg&s=10" alt="off bulb" /> }</h1>
        <button onClick={changeBulb}>{isOn ? "false" : "true"}</button>

        </>
     )
}

export default Bulb;