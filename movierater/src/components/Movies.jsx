import React, {useEffect, useState} from "react";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import { StyledMovies } from "./styles/Movies.styled";
import { API } from "../APIservice";

function Movies() {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const loadMovie = movie => {
        setSelectedMovie(movie);
    }

    useEffect(() => {
        API.getMovies()
            .then( res => setMovies(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <StyledMovies>
            <div>
                <MovieList
                    movies={movies}
                    movieClicked={loadMovie} />
            </div>
            <div>
                <MovieDetail
                    movie={selectedMovie}/>
            </div>
        </StyledMovies>
    )
}

export default Movies;
