import React from 'react';
import Comment from "../comments/Comment";
import CommentInput from "../comments/CommentInput"


export default function CommentsList(props) {

    return (
        <ul className="comments-list">
            <Comment  />
            <Comment  />

            <CommentInput />
            
          
           
            


            
        </ul>
    );
}