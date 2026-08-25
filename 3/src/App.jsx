import { useState } from 'react'
import './App.css'
import ProductTab from './ProductTab'

function App() {

  return (
    <>
      <ProductTab name="Iphone 15"  brand="Apple" price={100000} inStock={false}/>
       <ProductTab name="Galaxy s24"  brand="Samsung" price={65000} inStock={true}/>
        <ProductTab name="Pixel 9"  brand="Google" price={6000} inStock={true}/>
    
          </>
  )
}

export default App
