import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import InputBar from "./InputBar"
import {useSelector} from "react-redux";

export default function CommentInput(props) {
    var user = useSelector(state => state.userReducer);
    let avatarStyle = user.avatarImg ? {backgroundImage: user.avatarImg} : {backgroundColor: user.avatarColor};


    return (
        <div className="post-status-bar comment-bar"
             style={props.style}
        >
            <Avatar className="post-avatar" style={
                {
                    height: "30px",
                    width: "30px",
                    backgroundColor: avatarStyle.backgroundColor,
                }}
                    src={avatarStyle.backgroundImage}>
                {user.name.charAt(0)}
            </Avatar>

            <InputBar
                onNewStatus={(statusString) => {
                    props.onNewStatus(statusString)
                }}
                text="Napíšte komentár..."/>

        </div>


    );
}



