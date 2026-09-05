import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Home Route</h1>}/>
      <Route path='/about' element={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis nemo dolorum, facilis perspiciatis ex porro, animi ipsa ducimus facere reprehenderit nulla impedit sit distinctio? Ipsum omnis voluptatibus dolor rem!</p>}/>
    </Routes>
    </BrowserRouter>
      
          </>
  )
}

export default App
