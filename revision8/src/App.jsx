import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput]= useState({name:"", email:""});
  function handleClick(){
    console.log("clicked");
  }
  function inpCheck(e){
    console.log(e.target.value);
  }
  function setInp(e){
    setInput((prev)=>({...prev, [e.target.name]:e.target.value}))
  }
  function formSubmission(e){
    e.preventDefault();
    console.log(input.name);
    console.log(input.email);
    console.log(input);
  }

  return (
    <>
      <h1>Event</h1>
      <form onSubmit={formSubmission}>
        <input type="text" onChange={setInp} value={input.name} name='name'/>
        <input type="text" onChange={setInp} value={input.email} name='email'/>
        <button type='submit'>submit</button>
      </form>
      <button onClick={handleClick}>Click check</button>



          </>
  )
}

export default App
