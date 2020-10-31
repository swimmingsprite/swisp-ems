import React from 'react';


export default function PostEmojis(props) {

    return (
        <div className="post-emojis">
            <p
            style={{
                display: "inline-block",
                marginLeft: "15px",

            }}
            >👍 {props.values.likesValue}</p>
            
            
            
            <p
            style={{
                display: "inline-block",
                marginRight: "15px",
                float: "right"

            }}>💬 {props.values.commentsValue}</p>
            

        </div>
    );
}