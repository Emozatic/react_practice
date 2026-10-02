import { useState } from 'react'
import User from './User'
import { useContext } from 'react'
import UserContext from './UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContext.Provider value="Lucky">
      <User/>

      </UserContext.Provider>
         </>
  )
}

export default App
