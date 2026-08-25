import { useState } from 'react'
import './App.css'
import ProductTab from './ProductTab'
import ProductCard from './ProductCard';

function App() {
  let arr1= ["hi-tech", "durability"];
  return(
  <>
  <ProductCard title="Iphone" price={100000} features={arr1}/>
          </>
  )
}

export default App;
