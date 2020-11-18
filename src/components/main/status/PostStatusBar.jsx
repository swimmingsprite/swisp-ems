import React from 'react';
// import Avatar from "../components/Avatar"
import Avatar from '@material-ui/core/Avatar';
import InputBar from "../input/InputBar"
import {useSelector} from "react-redux";

export default function PostStatusBar(props) {
    var user = useSelector(state => state.userReducer);



    return (
        <div className="post-status-bar">
            <Avatar className="post-avatar" style={
                {height: "30px", 
                width: "30px", 
                backgroundColor: user.avatarColor}}>
            </Avatar>

            <InputBar
                onNewStatus={(statusString)=>{props.onNewStatus(statusString)}}
                text="Napíšte status..." />

        </div>
    );
}