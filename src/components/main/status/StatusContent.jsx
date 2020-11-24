import React from 'react';
import LikeCommentPanel from "./LikeCommentPanel"


export default function StatusContent(props) {

    return (
        <div className="status-content" style={{...props.style}}>
            {props.text}
            {props.buttons && <LikeCommentPanel like="Páči sa mi to"
                                                comment="Komentáre"
                                                onLikeClick={props.onLikeClick}
                                                onCommentsClick={props.onCommentsClick}
                                                limit={props.limit}
                                                commentsLength={props.commentsLength}
                                                liked={props.liked}
            />}
        </div>
    );
}