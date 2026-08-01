import MovieCard from './MovieCard'
import './App.css'

function App() {
  
let genre1= ["action", "sci-fi", "drama"];
  return (
    <>
    <MovieCard Poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5X8poKJ9ocso3GrsXrbwqpvft4L8nRqDzLF4ptEXChw&s=10" title="Avengers" year={2022} genre= {genre1}/>
    <MovieCard Poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5X8poKJ9ocso3GrsXrbwqpvft4L8nRqDzLF4ptEXChw&s=10" title="Avengers" year={2022} genre= {genre1}/>
    <MovieCard Poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5X8poKJ9ocso3GrsXrbwqpvft4L8nRqDzLF4ptEXChw&s=10" title="Avengers" year={2022} genre= {genre1}/>
  
  </>
  )
}

export default App
