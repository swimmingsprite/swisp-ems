import React from 'react';
import LikeCommentPanel from "../main/LikeCommentPanel"


export default function StatusContent(props) {

    return (
        <div className="status-content">
            {props.text}
            <LikeCommentPanel />
        </div>
    );
}