import React from 'react';
import Comment from "../comments/Comment";
import CommentInput from "../input/CommentInput"
import {useDispatch} from "react-redux";


export default function CommentsList(props) {

    /*do props post id*/

    var comments = props.list;
    var dispatch = useDispatch();
    // var postId = props.postId;

   /* comments.forEach(value => {
        console.log("******comments: "+value.text+" statusId: "+value.statusId);
    })*/


    function handleNewComment(text) {
        /*post async on server and fetch new id and timestamp*/
        /*todo dispatch to redux*/
        /*todo commentsLimit + 1 v reduxe*/

        var newComment = {
            commentId: Math.floor(Math.random() * 10000000),
            statusId: props.statusId,
            text: text,
            timestamp: new Date().getTime()
        }

        dispatch({type: "COMMENT_ADD", postId: props.postId, comment: newComment});

    }

    return (


        <ul className="comments-list">

            <CommentInput onNewStatus={handleNewComment}/>
            {comments
                //todo first sort by timestamp
                .slice(0, props.limit)
                .map((comment => <Comment
                    text={comment.text}
                    key={comment.commentId}
                    time={comment.timestamp}
                    postId = {props.postId}
                />))}
        </ul>
    );
}