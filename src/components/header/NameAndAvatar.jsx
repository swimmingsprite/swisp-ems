import React from 'react';
import Avatar from "../Avatar"
import Paragraph from "./Paragraph"


export default function NameAndAvatar(props) {

    return (
        <div className="name-and-avatar">
            <Paragraph text="John Barney" paragraphClass="login-name" />
            <Avatar cl="avatar" />
        </div>
    );
}