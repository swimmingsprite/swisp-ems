import React from 'react';
import LikeCommentPanel from "../main/LikeCommentPanel"


export default function StatusContent(props) {
    console.log("props buttons: "+props.buttons)

    return (
        <div className="status-content">
            {props.text}
            {props.buttons && <LikeCommentPanel/>}
        </div>
    );
}