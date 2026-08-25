import './App.css'
import Button from './Button';

function App() {
  function handleClick(){
      console.log("Button Clicked");
    }
  return (
    <>
    <Button handleClick={handleClick}/>
      </>
  )
}

export default App
