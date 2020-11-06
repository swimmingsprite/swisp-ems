import React from 'react';

function SubTitle(props) {

    return (
        <div className="sub-title" style={props.style}>
            <h1>{props.text}</h1>
            <hr className="title-hr" />
        </div>
    );
}

export default function Title(props) {

    return (
        <div className="title" style={props.style}>
            <h1>{props.text}</h1>
            <hr className="title-hr" />
        </div>
    );
}

export {SubTitle};