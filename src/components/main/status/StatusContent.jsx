import React from 'react';
import LikeCommentPanel from "./LikeCommentPanel"


export default function StatusContent(props) {
    console.log("props buttons: "+props.buttons)

    return (
        <div className="status-content">
            {props.text}
            {props.buttons && <LikeCommentPanel like="Páči sa mi to"
                                                comment="Komentáre"
                                                onLikeClick={props.onLikeClick}
                                                onCommentsClick={props.onCommentsClick}

            />}
        </div>
    );
}