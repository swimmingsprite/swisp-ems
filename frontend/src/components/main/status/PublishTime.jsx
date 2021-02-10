import React from 'react';

export default function PublishTime(props) {

    return (
        <p className="publish-time"
           style = {props.style}
        >{props.text}</p>
    );
}