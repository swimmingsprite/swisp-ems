import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TwoLineTextTime from "../TextLines"
import StatusContent from "./StatusContent"
import CommentsList from "../comments/CommentsList"
import PostEmojis from "./PostEmojis"

function isZeroPostInteraction(post) {
    return !(post.likes.length || post.comments.length > 0);
}

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
            header={props.post.author}
            text={props.post.authorRole}
            time={props.post.timestamp}
            />

            <StatusContent buttons={true} text={props.post.text} />

            {!isZeroPostInteraction(props.post) && <PostEmojis
                likes={props.post.likes.length}
                comments={props.post.comments.length}
            />}

            <CommentsList list={props.post.comments}  />
            


            
        </div>
    );
}