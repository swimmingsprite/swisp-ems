import React from 'react';
import Comment from "../comments/Comment";
import CommentInput from "../input/CommentInput"


export default function CommentsList(props) {
    const [comments, setComments] = React.useState([]);

    function handleNewComment(comment) {
        setComments([<Comment text={comment} />, ...comments ]);
    }

    return (


    <ul className="comments-list">
            {/*<Comment  />
            <Comment  />
        */}
        <CommentInput onNewStatus={handleNewComment} />
            {comments}







        </ul>
    );
}