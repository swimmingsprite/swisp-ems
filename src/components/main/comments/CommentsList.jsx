import React from 'react';
import Comment from "../comments/Comment";
import CommentInput from "../input/CommentInput"


export default function CommentsList(props) {

    /*do props post id*/

    var comments = props.list;



   /* comments.forEach(value => {
        console.log("******comments: "+value.text+" statusId: "+value.statusId);
    })*/


    function handleNewComment(text) {
        /*post async on server and fetch new id and timestamp*/
        /*dispatch to redux*/

        var newComment = {
            commentId: Math.floor(Math.random() * 10000000),
            statusId: props.statusId,
            text: text,
            timestamp: new Date().getTime()
        }


        // setComments([newComment, ...comments]);
    }

    return (


        <ul className="comments-list">

            <CommentInput onNewStatus={handleNewComment}/>
            {comments
                // .filter((comment) => comment.statusId === props.statusId)
                .map((comment => <Comment
                    text={comment.text}
                    key={comment.commentId}
                    time={comment.timestamp}
                    postId = {props.postId}
                />))}
        </ul>
    );
}