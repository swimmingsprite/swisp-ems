import React from 'react';
// import Avatar from "../components/Avatar"
import Avatar from '@material-ui/core/Avatar';
import InputBar from "../input/InputBar"

export default function PostStatusBar(props) {


    return (
        <div className="post-status-bar">
            <Avatar className="post-avatar" style={
                {height: "30px", 
                width: "30px", 
                backgroundColor: "red"}}>
            </Avatar>

            <InputBar
                onNewStatus={(statusString)=>{props.onNewStatus(statusString)}}
                text="Napíšte status..." />

        </div>
    );
}