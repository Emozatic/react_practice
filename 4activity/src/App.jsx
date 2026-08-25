import './App.css'


function App() {
  
  let check= (brand)=>{
    console.log(`${brand} clicked`);
  };
  return (
    <>
    <button onClick={()=>check("apple")}>Apple</button>
    <button onClick={()=>check("samsung")}>Samsung</button>
    <button onClick={()=>check("google")}>Google</button>
    </>
  )
}

export default App
