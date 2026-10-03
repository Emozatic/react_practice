import { useState } from 'react'
import ThemeContext from './ThemeContext'
import Theme from './Theme'
import User from './User'
import UserContext from './UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <ThemeContext.Provider value="Light">
    <Theme/>
  </ThemeContext.Provider> */}

  <UserContext.Provider value= {{name:"Lucky", age:21}}><User/></UserContext.Provider>

    </>
  )
}

export default App
