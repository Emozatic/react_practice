
import './App.css'

function App() {
 let handleClick=()=>{
  console.log("Button Clicked");
 }

  return (
    <>
  <button onClick={handleClick}>Click me</button>
     </>
  )
}

export default App
