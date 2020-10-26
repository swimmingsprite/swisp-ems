import React from 'react';

export default function Title(props) {

    return (
        <div className="title">
            <h1>{props.text}</h1>
            <hr className="title-hr" />
        </div>
    );
}