import React from 'react';
import Comment from "../comments/Comment";
import CommentInput from "../input/CommentInput"

import ReactDOM from "react-dom";


export default function CommentsList(props) {
    const [comments, setComments] = React.useState([]);

    comments.forEach(value => {
        console.log("******comments: "+value.text+" statusId: "+value.statusId);
    })

    // var comments = [];

    /*function setComments(newComments) {
        comments = newComments
    }*/

    function handleNewComment(text) {
        /*post on server and fetch new id and timestamp*/

        var newComment = {
            commentId: Math.floor(Math.random() * 10000000),
            statusId: props.statusId,
            text: text,
            timestamp: new Date().getTime()
        }


        setComments([newComment, ...comments]);
    }

    return (


        <ul className="comments-list">

            <CommentInput onNewStatus={handleNewComment}/>
            {comments
                .filter((comment) => comment.statusId === props.statusId)
                .map((comment => <Comment text={comment.text} key={comment.commentId} time={comment.timestamp} />))}
        </ul>
    );
}