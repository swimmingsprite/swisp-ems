import React from 'react';
import Avatar from "../components/Avatar"
import Paragraph from "../components/Paragraph"


export default function NameAndAvatar(props) {

    return (
        <div className="name-and-avatar">
            <Paragraph text="John Barney" paragraphClass="login-name" />
            <Avatar cl="avatar" />
        </div>
    );
}