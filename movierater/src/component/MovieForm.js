import React, { useState, useEffect } from "react";
import {useCookies} from "react-cookie";
import { API } from '../APIservice';
import { StyledMovieForm } from "./styles/MovieForm.styled";

function MovieForm(props) {

    const [ title, setTitle ] = useState("");
    const [ release_date, setDate ] = useState("");
    const [ description, setDescription ] = useState("");
    const [token] = useCookies(['mr-token']);

    useEffect( () => {
        setTitle(props.movie.title);
        setDate(props.movie.release_date)
        setDescription(props.movie.description);
    }, [props.movie])

    const updateClicked = () => {
        API.updateMovie(props.movie.id, {title, release_date, description}, token['mr-token'])
            .then( res => props.updatedMovie(res))
            .catch( err => console.log(err))
    }

    const createClicked = () => {
        API.createMovie({title, release_date, description}, token['mr-token'])
            .then( res => props.newMovie(res))
            .catch( err => console.log(err))
    }

    return (
        <StyledMovieForm>
            { props.movie ? (
                <div className="layout-detail">
                    {props.movie.id ?
                        <h2>
                            Edit the movie: {props.movie.title}
                        </h2> :
                        <h2>
                            Add a new Nic Cage movie
                        </h2>
                    }

                    <form>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" value={title}
                               onChange={ evt => setTitle(evt.target.value)} />
                        <label htmlFor="year">Release Date</label>
                        <input id="year" type="text" value={release_date}
                               onChange={ evt => setDate(evt.target.value)} />
                        <label htmlFor="description">Description</label>
                        <textarea id="description" rows={6} value={description}
                                  onChange={ evt => setDescription(evt.target.value)}>
                        </textarea>
                        {props.movie.id ?
                            <button onClick={updateClicked}>Update</button> :
                            <button onClick={createClicked}>Submit</button>
                        }
                    </form>
                </div>
            ) : null }
        </StyledMovieForm>
    )
}

export default MovieForm;