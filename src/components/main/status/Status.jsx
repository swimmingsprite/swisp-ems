import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TwoLineTextTime from "../TextLines"
import StatusContent from "./StatusContent"
import CommentsList from "../comments/CommentsList"
import PostEmojis from "./PostEmojis"

export default function Status(props) {


    return (
        <div className="post-status-bar">
            <Avatar className="post-avatar" style={
                {height: "30px", 
                width: "30px", 
                backgroundColor: "red",
                transform: "translateY(10%)",
                backgroundImage: "url("+props.src+")"
                }}>
            </Avatar>

            <TwoLineTextTime 
            header="John Barney"
            text="shop manager" />

            <StatusContent buttons={true} text={props.text} />

            <PostEmojis likeValue={16} commentsValue={6}/>

            <CommentsList statusId={props.statusId} />
            


            
        </div>
    );
}