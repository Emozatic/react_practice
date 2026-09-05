import { useState } from 'react'
import {BrowserRouter, Routes, Route, NavLink, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';

import './App.css'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/user">User</NavLink>
    <Routes>
      <>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/user/:id' element={<User/>}/>
    </>
    </Routes>
    </BrowserRouter>
      
          </>
  )
}

export default App
