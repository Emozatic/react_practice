import './App.css'

function App() {
  let input= (event)=>{
    console.log(event.target.value);
  }
  let button=()=>{
    console.log("submitted");
  }

  return (
    <>
  <input type="text" placeholder='enter anything' onChange={input} />
  <button onClick={button}>submit</button>
    </>
  )
}

export default App
