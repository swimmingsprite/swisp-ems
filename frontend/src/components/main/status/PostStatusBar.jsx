import React from 'react';
// import Avatar from "../components/Avatar"
import Avatar from '@material-ui/core/Avatar';
import InputBar from "../input/InputBar"
import {useSelector} from "react-redux";
import isBase64 from 'is-base64';

export default function PostStatusBar(props) {
    var user = useSelector(state => state.userReducer);
    let avatarStyle = user.avatarImg && isBase64(user.avatarImg, {allowMime: true})
        ? {backgroundImage: user.avatarImg} : {backgroundColor: user.avatarColor};


    return (
        <div className="post-status-bar">
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
                text="Napíšte status..."/>

        </div>
    );
}