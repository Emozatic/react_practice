import './App.css'

function App() {
  const isLoggedIn= true;
  return (
    <>
  <h1>{isLoggedIn?"accessable":"not permitted"}</h1>
      </>
  )
}

export default App
