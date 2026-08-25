import './App.css'
import Truthy from './Truthy';
function App() {
  const isLoggedIn= false;
  return (
    <>
  {isLoggedIn && <Truthy/>}
      </>
  )
}

export default App
