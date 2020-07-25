import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
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
                        {/* One to one and a half stars */}
                        <FontAwesomeIcon icon={faStar} className={mv.avg_rating >= 1 ? 'stars-rated' : 'stars-unrated'} />
                        {(1 < mv.avg_rating && mv.avg_rating < 2) && <FontAwesomeIcon icon={faStarHalf} className='stars-rated' /> }
                        {/* Two to two and a half stars */}
                        <FontAwesomeIcon icon={faStar} className={(1 < mv.avg_rating && mv.avg_rating < 2) ? 'half-stars-unrated' : mv.avg_rating >= 2 ? 'stars-rated' : 'stars-unrated'} />
                        {(2 < mv.avg_rating && mv.avg_rating < 3) && <FontAwesomeIcon icon={faStarHalf} className='stars-rated' /> }
                        {/* Three to three and a half stars */}
                        <FontAwesomeIcon icon={faStar} className={(2 < mv.avg_rating && mv.avg_rating < 3) ? 'half-stars-unrated' : mv.avg_rating >= 3 ? 'stars-rated' : 'stars-unrated'} />
                        {(3 < mv.avg_rating && mv.avg_rating < 4) && <FontAwesomeIcon icon={faStarHalf} className='stars-rated' /> }
                        {/* Four to four and a half stars */}
                        <FontAwesomeIcon icon={faStar} className={(3 < mv.avg_rating && mv.avg_rating < 4) ? 'half-stars-unrated' : mv.avg_rating >= 4 ? 'stars-rated' : 'stars-unrated'} />
                        {(4 < mv.avg_rating && mv.avg_rating < 5) && <FontAwesomeIcon icon={faStarHalf} className='stars-rated' /> }
                        {/* Five to five and a half stars */}
                        <FontAwesomeIcon icon={faStar} className={(4 < mv.avg_rating && mv.avg_rating < 5) ? 'half-stars-unrated' : mv.avg_rating >= 5 ? 'stars-rated' : 'stars-unrated'} />
                        {(5 < mv.avg_rating && mv.avg_rating < 6) && <FontAwesomeIcon icon={faStarHalf} className='stars-rated' /> }
                        {/* Six to six and a half stars */}
                        <FontAwesomeIcon icon={faStar} className={(5 < mv.avg_rating && mv.avg_rating < 6) ? 'half-stars-unrated' : mv.avg_rating >= 6 ? 'stars-rated' : 'stars-unrated'} />
                        {(6 < mv.avg_rating && mv.avg_rating < 7) && <FontAwesomeIcon icon={faStarHalf} className='stars-rated' /> }
                        {/* Seven to seven and a half stars */}
                        <FontAwesomeIcon icon={faStar} className={(6 < mv.avg_rating && mv.avg_rating < 7) ? 'half-stars-unrated' : mv.avg_rating >= 7 ? 'stars-rated' : 'stars-unrated'} />
                        {(7 < mv.avg_rating && mv.avg_rating < 8) && <FontAwesomeIcon icon={faStarHalf} className='stars-rated' /> }
                        {/* Eight to eight and a half stars */}
                        <FontAwesomeIcon icon={faStar} className={(7 < mv.avg_rating && mv.avg_rating < 8) ? 'half-stars-unrated' : mv.avg_rating >= 8 ? 'stars-rated' : 'stars-unrated'} />
                        {(8 < mv.avg_rating && mv.avg_rating < 9) && <FontAwesomeIcon icon={faStarHalf} className='stars-rated' /> }
                        {/* Nine to nine and a half stars */}
                        <FontAwesomeIcon icon={faStar} className={(8 < mv.avg_rating && mv.avg_rating < 9) ? 'half-stars-unrated' : mv.avg_rating >= 9 ? 'stars-rated' : 'stars-unrated'} />
                        {(9 < mv.avg_rating && mv.avg_rating < 10) && <FontAwesomeIcon icon={faStarHalf} className='stars-rated' /> }
                        {/* Ten stars */}
                        <FontAwesomeIcon icon={faStar} className={mv.avg_rating === 10 ? 'stars-rated' : 'stars-unrated'} />
                    </div>
                    <p>
                        {Math.round(mv.avg_rating * 10) / 10} out of 10 stars from {mv.num_ratings === 1 ?
                        `${mv.num_ratings} rating` :
                        `${mv.num_ratings} ratings`}
                    </p>
                    <div className="rating-container">
                        <h3>Rate this movie!</h3>
                        { [...Array(10)].map( (el, i) => {
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