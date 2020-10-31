import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TwoLineTextTime from "../TextLines"
import StatusContent from "./StatusContent"
import CommentsList from "../comments/CommentsList"
import PostEmojis from "./PostEmojis"

function isZeroPostInteraction(emojiValues) {
    if (Object
        .values(emojiValues)
        .filter((value) => value !== 0)
        .length
        > 0) return false;
    return true;
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
            header={props.values.author}
            text={props.values.authorRole}
            time={props.values.timestamp}
            />

            <StatusContent buttons={true} text={props.values.text} />

            {!isZeroPostInteraction(props.values.emojiValues) && <PostEmojis values={props.values.emojiValues}/>}

            <CommentsList statusId={props.values.statusId}  />
            


            
        </div>
    );
}