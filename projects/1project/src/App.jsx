//App.jsx
import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from '../components/ProtectedRoute';
import Home from '../pages/Home';

function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn]= useState(false);

  return (
    <>
      <BrowserRouter>
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/dashboard' element={
      <ProtectedRoute>
        <Dashboard/>
        </ProtectedRoute>
        }
        />
    </Routes>
    </AuthContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
