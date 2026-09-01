import { useState } from 'react'
import ContextProvider from './ContextProvider'
import './App.css'
import User from './User'

function App() {
  const [count, setCount] = useState(0)
  let obj= {name:"Lucky", age:21, city:"Delhi"};
  const[data, setData]= useState(obj);

  return (
    <>
 <ContextProvider.Provider value={{data,setData}}><User/></ContextProvider.Provider>
        </>
  )
}

export default App
