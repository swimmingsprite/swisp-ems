import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TwoLineTextTime from "../main/TextLines"
import StatusContent from "../main/StatusContent"
import CommentsList from "../main/comments/CommentsList"
import PostEmojis from "../main/PostEmojis"

export default function Status(props) {

    return (
        <div className="post-status-bar">
            <Avatar className="post-avatar" style={
                {height: "30px", 
                width: "30px", 
                backgroundColor: "red",
                transform: "translateY(10%)"
                }}>
            </Avatar>

            <TwoLineTextTime 
            header="John Barney"
            text="shop manager" />

            <StatusContent buttons={true} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sodales ligula. Etiam consequat tempor magna in vestibulum. Donec rhoncus molestie porttitor. Vivamus faucibus urna ultricies massa dapibus hendrerit. Cras luctus sem eros. Ut at ipsum nec risus molestie auctor. Vestibulum ac sapien aliquet, posuere ligula quis, porta neque."/>
            
            <PostEmojis likeValue={16} commentsValue={6}/>


            <CommentsList />
            


            
        </div>
    );
}