import { useState } from 'react'
import './App.css'
import Title from "./Title.jsx";
import Card from './Card.jsx';

function App() {

  let option1= ["hi-tech", "durable"]
  let option2= ["latest", "energy-effecient"]
  return (
    <div className= "container">
    <Card title="phone" price={30000} features={option1}/>
    <Card title="laptop" price={50000} features={option2}/>
    </div>
  )
}

export default App
