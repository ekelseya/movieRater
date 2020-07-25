import React, { useState, useEffect } from "react";
import {useCookies} from "react-cookie";
import { API } from "../APIservice";

// import { StyledMovieForm } from "./styles/MovieForm.styled";

function CommentForm(props) {

    const movie = props.mv;
    console.log(movie);

    const [ comment, setComment ] = useState("");
    const [token] = useCookies(['mr-token']);

    useEffect( () => {
        setComment(props.comment.text);
    }, [props.comment])

    const updateClicked = () => {
        API.updateComment(props.comment.id, {comment}, token['mr-token'])
            .then( res => props.updatedComment(res))
            .catch( err => console.log(err))
    }

    const createClicked = () => {
        API.createComment({movie, comment}, token['mr-token'])
            .then( res => props.newComment(res))
            .catch( err => console.log(err))
    }

    return (
        <div>
            { props.comment ? (
                <div className="layout-detail">
                    {props.comment.id ?
                        <h2>
                            Edit your comment
                        </h2> :
                        <h2>
                            Add a new comment
                        </h2>
                    }

                    <form>
                        <label htmlFor="comment">Comment</label>
                        <textarea id="comment" rows={6} value={comment}
                                  onChange={ evt => setComment(evt.target.value)}>
                        </textarea>
                        {props.comment.id ?
                            <button onClick={updateClicked}>Update</button> :
                            <button onClick={createClicked}>Submit</button>
                        }
                    </form>
                </div>
            ) : null }
        </div>
    )
}

export default CommentForm;