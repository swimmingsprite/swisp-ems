import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {OneLineTextTime} from "../../main/TextLines"
import StatusContent from "../status/StatusContent"

export default function Comment(props) {

    return (
        <li className="comment-li">
            <div className={"post-status-bar comment-bar"}>
            <Avatar className="post-avatar" style={
                {height: "20px", 
                width: "20px", 
                backgroundColor: "red",
                transform: "translateY(0%)"
                }}>
            </Avatar>

            <OneLineTextTime header="John Barney" time={props.time}/>

            <StatusContent
                buttons={false}
                text={props.text}
                statusId={props.statusId}
            />
            
        
            


            
        </div>

        </li>
    );
}