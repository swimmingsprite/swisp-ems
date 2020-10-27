import React from 'react';
// import Avatar from "../components/Avatar"
import Avatar from '@material-ui/core/Avatar';
import InputBar from "../input/InputBar"

export default function PostStatusBar(props) {

    console.log("HANDLE CHANGE JE: "+typeof props.handleChange)

    return (
        <div className="post-status-bar">
            <Avatar className="post-avatar" style={
                {height: "30px", 
                width: "30px", 
                backgroundColor: "red"}}>
            </Avatar>

            <InputBar handleChange={()=>{props.handleChange()}} text="Napíšte status..." />

        </div>
    );
}