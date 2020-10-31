import React from 'react';



export default function LikeCommentPanel(props) {

    return (
        <div className="like-comment-panel">
         <hr className="like-comment-hr" />

         <button
             className="like-comment-button like-button">
             {props.like}
         </button>

         <div className="like-comment-vr"></div>

            <button
                className="like-comment-button comment-button">
                {props.comment}
            </button>


        </div>
    );
}