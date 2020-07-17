import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {useCookies} from "react-cookie";
import { StyledMovieDetail } from "./styles/MovieDetail.styled";
// import CommentDetail from "./CommentDetail";
// import CommentForm from "./CommentForm";

function MovieDetail(props) {

    const mv = props.movie;
    // const [ comments, setComments ] = useState(null)
    // const [ editedComment, setEditedComment ] = useState(null);
    const [ highlighted, setHighlighted ] = useState(-1);
    const [ token ] = useCookies(['mr-token']);

    const highlightRate = high => evt => {
        setHighlighted(high)
    }

    const rateClicked = rate => evt => {
        fetch(`http://127.0.0.1:8000/api/movies/${mv.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`
            },
            body: JSON.stringify( {stars: rate + 1} )
        })
            .then( () => getDetails())
            .catch( error => console.log(error))
    }

    const getDetails = () => {
        fetch(`http://127.0.0.1:8000/api/movies/${mv.id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`
            }
        })
            .then( res => res.json())
            .then( res => props.updateMovie(res))
            .catch( error => console.log(error))
    }

    // const updatedComment = newComment => {
    //     const newCommentList = comments.map( comment => {
    //         if (comment === newComment) {
    //             return newComment;
    //         }
    //         return comment;
    //     })
    //     setComments(newCommentList);
    // }
    // // TODO: need to add edit functionality in form (props)
    // const editComment = comment => {
    //     setEditedComment(comment);
    // }
    //
    // const createComment = evt => {
    //     setEditedComment({text: ''});
    // }
    //
    // const commentCreated = comment => {
    //     const newCommentList = [...comments, comment];
    //     setComments(newCommentList);
    // }
    // // TODO: need to add delete functionality in form (props)
    // const deleteComment = deletedComment => {
    //     const newCommentList = comments.filter(comment => comment !== deletedComment);
    //     setComments(newCommentList);
    // }

    return (
        <StyledMovieDetail>
            { mv ? (
                <div>
                    <h2>
                        {mv.title}
                    </h2>
                    <h3>
                        Released {mv.year_released}
                    </h3>
                    <p>{mv.description}</p>
                    <div>
                        <FontAwesomeIcon icon={faStar} className={Math.floor(mv.avg_rating) > 0 ? 'stars-rated' : 'stars-unrated'} />
                        <FontAwesomeIcon icon={faStar} className={Math.floor(mv.avg_rating) > 1 ? 'stars-rated' : 'stars-unrated'} />
                        <FontAwesomeIcon icon={faStar} className={Math.floor(mv.avg_rating) > 2 ? 'stars-rated' : 'stars-unrated'} />
                        <FontAwesomeIcon icon={faStar} className={Math.floor(mv.avg_rating) > 3 ? 'stars-rated' : 'stars-unrated'} />
                        <FontAwesomeIcon icon={faStar} className={Math.floor(mv.avg_rating) > 4 ? 'stars-rated' : 'stars-unrated'} />
                    </div>
                    <p>
                        {Math.floor(mv.avg_rating)} out of 5 stars from {mv.num_ratings === 1 ?
                        `${mv.num_ratings} rating` :
                        `${mv.num_ratings} ratings`}
                    </p>
                    <div className="rating-container">
                        <h3>Rate this movie!</h3>
                        { [...Array(5)].map( (el, i) => {
                            return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i - 1 ? 'stars-rated' : 'stars-unrated'}
                                    onMouseEnter={highlightRate(i)}
                                    onMouseLeave={highlightRate(-1)}
                                    onClick={rateClicked(i)}
                            />
                        })
                        }
                    </div>
                    {/*<div className='comments-container'>*/}
                    {/*    /!*TODO: Style button*!/*/}
                    {/*    /!*TODO: Adding a comment loses the loaded movie; send prop to Movies?*!/*/}
                    {/*    <button onClick={createComment}>Add New Comment</button>*/}
                    {/*    { editedComment ?*/}
                    {/*        <CommentForm*/}
                    {/*            movie={mv}*/}
                    {/*            comment={editedComment}*/}
                    {/*            updatedComment={updatedComment}*/}
                    {/*            newComment={commentCreated}*/}
                    {/*            getDetails={getDetails} />*/}
                    {/*        : null }*/}
                    {/*    {(mv.comments && mv.comments.map((comment, i) => {*/}
                    {/*    //    TODO: add hooks to create, edit, and delete comment*/}
                    {/*    return (<CommentDetail key={i} comment={comment} />)*/}
                    {/*    }*/}
                    {/*))}*/}
                    {/*</div>*/}
                </div>
            ) : null }
        </StyledMovieDetail>
    )
}

export default MovieDetail;