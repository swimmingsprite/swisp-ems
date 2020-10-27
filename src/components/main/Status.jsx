import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TwoLineText from "../main/TwoLineText"
import StatusContent from "../main/StatusContent"

export default function Status(props) {

    return (
        <div className="post-status-bar">
            <Avatar className="post-avatar" style={
                {height: "30px", 
                width: "30px", 
                backgroundColor: "red"}}>
            </Avatar>

            <TwoLineText 
            header="John Barney"
            text="shop manager" />

            <StatusContent text="ahoooooooooooooooojahoovvvvvvvvvvv         ooooooooooooooj"/>

            


            
        </div>
    );
}