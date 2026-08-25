
import './App.css'

function App() {
 let handleClick=(event)=>{
  console.log(event);
 }
 let change= (event)=>{
  console.log(event.target.value);
 }

  return (
    <>
  <button onClick={handleClick}>Click me</button>
  <input type="text" placeholder='enter anything' onChange={change}/>
     </>
  )
}

export default App
