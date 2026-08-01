import { useState } from 'react'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {

  return (
    <>
<ProfileCard username= "funny" profession="SDE1"/>
<ProfileCard username= "angry" profession="SDE2"/>
<ProfileCard username= "frustrated" profession="SDE3"/>
          </>
  )
}

export default App
