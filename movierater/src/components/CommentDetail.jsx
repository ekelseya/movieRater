import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faStar, faTrash} from '@fortawesome/free-solid-svg-icons'
import {useCookies} from "react-cookie";
import { API } from "../APIservice";
// import { StyledMovieDetail } from "./styles/MovieDetail.styled";

function CommentDetail(props) {

    let commentID = props.comment;

    const [comment, setComment] = useState("");
    const [token] = useCookies(['mr-token']);

    useEffect(() => {
        API.getComments(commentID)
            .then( res => setComment(res))
            .catch(err => console.log(err))
    }, [])

    const editClicked = comment => evt => {
        props.editClicked(comment);
    }

    const removeClicked = comment => evt => {
        API.deleteComment(comment.id)
            .then(() => props.removeComment(comment))
            .catch(err => console.log(err))
    }

    return (
        <div>
            { comment ? (
                <div>
                    <p>{comment.text}</p>
                    <p>{comment.owner} <span>
                            <FontAwesomeIcon onClick={editClicked(comment)} icon={faEdit} />
                            <FontAwesomeIcon onClick={removeClicked(comment)} icon={faTrash} />
                        </span>
                    </p>
                </div>
            ) : null }
        </div>
    )
}

export default CommentDetail;