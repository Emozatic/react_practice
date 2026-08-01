import Poster from "./Poster";
import Title from "./Title";
import Year from "./Year";
import Genre from "./Genre";
import "./MovieCard.css"

function MovieCard ({poster, title, year, genre}){
    return(
        <div className="container">
            <Poster poster={poster}/>
            <Title title={title}/>
            <Year year={year}/>
            <Genre genre={genre}/>
        </div>
    )
}

export default MovieCard;