import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import './App.css'
import Dashboard from './Dashboard'
import Setting from './Setting'
import Profile from './Profile'
import Error from "./Error"

function App() {


  return (
    <>
    <BrowserRouter>
    <NavLink to="/dashboard">Dashboard</NavLink>
    <NavLink to="/dashboard/profile/setting">Setting</NavLink>
    <Routes> 
      <Route path='/dashboard' element={<Dashboard/>}>
      <Route path='profile' element={<Profile/>}>
      <Route path='setting' element={<Setting/>}/>
      </Route>
      </Route>
      <Route path='*' element={<Error/>}/>

    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
