import './App.css'
import Admin from './Admin'

function App() {
const isAdmin= true;
  return (
    <>
      {isAdmin && <Admin/>}
          </>
  )
}

export default App
