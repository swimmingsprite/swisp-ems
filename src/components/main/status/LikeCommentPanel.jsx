import React from 'react';


export default function LikeCommentPanel(props) {

    var likedStyle = props.liked ? {color: "#0984e3"} : null

    return (
        <div className="like-comment-panel">
         <hr className="like-comment-hr" />

         <button
             style={likedStyle}
             className="like-comment-button like-button"
            onClick={props.onLikeClick}
         >
             {props.like}
         </button>

         <div className="like-comment-vr"></div>

            <button
                className="like-comment-button comment-button"
                onClick={() => {
                    if (props.limit > 0) props.onCommentsClick(0);
                    else {props.onCommentsClick(
                        props.commentsLength < 5 ? props.commentsLength : 5
                    )};
                }}
            >
                {props.comment}
            </button>


        </div>
    );
}