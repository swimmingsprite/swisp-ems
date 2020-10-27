import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import InputBar from "../InputBar"

export default function CommentInput(props) {

    return (
        <div className="post-status-bar comment-bar">
        <Avatar className="post-avatar" style={
            {height: "30px", 
            width: "30px",  
            backgroundColor: "red"
            }}>
        </Avatar>

        <InputBar text="Napíšte komentár..." />

    </div>

        
    );
}