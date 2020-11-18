import React from 'react';


export default function PostEmojis(props) {

    return (
        <div className="post-emojis">
            {props.likes > 0 &&
            <p
                style={{
                    display: "inline-block",
                    marginLeft: "15px",

                }}
            >👍 {props.likes}</p>
            }


            {props.comments > 0 &&
            <p
                style={{
                    display: "inline-block",
                    marginRight: "15px",
                    float: "right"

                }}>💬 {props.comments}</p>
            }


        </div>
    );
}