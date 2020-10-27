import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TwoLineText from "./TextLines"
import StatusContent from "../main/StatusContent"

function Button(props) {
    return <button className={"like-comment-button " + props.handleClass}>{props.text}</button>
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