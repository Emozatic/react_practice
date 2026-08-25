import { useState } from 'react'
import './App.css'
import ProductTab from './ProductTab'

function App() {

  return (
    <>
      <ProductTab name="Iphone 15"  brand="Apple" price={100000}/>
       <ProductTab name="Galaxy s24"  brand="Samsung" price={65000}/>
        <ProductTab name="Pixel 9"  brand="Google" price={6000}/>
    
          </>
  )
}

export default App
