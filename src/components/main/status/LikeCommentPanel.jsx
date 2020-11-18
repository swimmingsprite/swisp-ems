import React from 'react';


export default function LikeCommentPanel(props) {

    return (
        <div className="like-comment-panel">
         <hr className="like-comment-hr" />

         <button
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
                    else props.onCommentsClick(5);
                }}
            >
                {props.comment}
            </button>


        </div>
    );
}