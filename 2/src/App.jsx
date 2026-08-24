import { useState } from 'react'
import './App.css'
import ProductTab from './ProductTab'

function App() {
let arr1= ["hi-tech", "durable"];
let arr2= ["massive-battery", "cost-effecient"];
  return (
    <>
    <ProductTab title="iphone" price="80k" features={arr1}/>
    <ProductTab title="android" price="20k" features={arr2}/>
          </>
  )
}

export default App;
