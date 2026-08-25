import './App.css'
import Admin from './Admin'
import User from './User';

function App() {
const isAdmin= false;
  return (
    <>
      {isAdmin ?<Admin/>:<User/>}
          </>
  )
}

export default App
