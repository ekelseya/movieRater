import React from "react";
import { StyledMovieList } from "./styles/MovieList.styled";

function MovieList(props) {

    const movieClicked = movie => evt => {
        props.movieClicked(movie);
    }

    return (
        <StyledMovieList>
            <div className="layout-title">
                { props.movies && props.movies.map( movie => {
                    return <div key={movie.id}>
                        <div className="movie-title" tabIndex="0" onClick={movieClicked(movie)} onKeyPress={movieClicked(movie)}>{ movie.title }</div>
                    </div>
                })}
            </div>
        </StyledMovieList>
    )
}

export default MovieList;