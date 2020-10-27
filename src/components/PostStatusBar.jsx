import React from 'react';
// import Avatar from "../components/Avatar"
import Avatar from '@material-ui/core/Avatar';
import InputBar from "../components/main/InputBar"

export default function PostStatusBar(props) {

    return (
        <div className="post-status-bar">
            <Avatar className="post-avatar" style={
                {height: "30px", 
                width: "30px", 
                backgroundColor: "red"}}>
            </Avatar>

            <InputBar text="Napíšte status..." />

        </div>
    );
}