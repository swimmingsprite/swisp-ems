import React from 'react';

export default function InputBar(props) {

    return (
        // <textarea className="textarea-bar" placeholder="Napíšte status..." />
        <div 
        className={props.isComment ? "input-bar input-bar-comment": "input-bar"} 
        contentEditable="true"
        data-text={props.text}
        ></div>
    );
}