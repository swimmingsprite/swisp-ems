import React from 'react';
import Comment from "../comments/Comment";


export default function CommentsList(props) {

    return (
        <ul className="comments-list">
            <Comment isComment={true} />
            <Comment isComment={true} />
            
          
           
            


            
        </ul>
    );
}