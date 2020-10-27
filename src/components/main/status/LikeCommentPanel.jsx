import React from 'react';

function Button(props) {
    return <button 
    className={"like-comment-button " + props.handleClass}>
    {props.text}
    </button>
}


export default function LikeCommentPanel(props) {

    return (
        <div className="like-comment-panel">
         <hr className="like-comment-hr" />
         <Button text="Páči sa mi to" handleClass="like-button"/>
         <div className="like-comment-vr"></div>  
         <Button text="Komentáre" handleClass="comment-button" />   

            
        </div>
    );
}