import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import OneLineTextTime from "../../main/TextLines"
import StatusContent from "../../main/StatusContent"

export default function Comment(props) {

    return (
        <li>
            <div className={"post-status-bar comment-bar"}>
            <Avatar className="post-avatar" style={
                {height: "20px", 
                width: "20px", 
                backgroundColor: "red",
                transform: "translateY(0%)"
                }}>
            </Avatar>

            <OneLineTextTime header="John Barney" />

            <StatusContent buttons={true} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales ligula. Etiam consequat tempor magna in vestibulum. Donec rhoncus molestie porttitor. Vivamus faucibus urna ultricies massa dapibus hendrerit. Cras luctus sem eros. Ut at ipsum nec risus molestie auctor. Vestibulum ac sapien aliquet, posuere ligula quis, porta neque."/>
            
        
            


            
        </div>

        </li>
    );
}