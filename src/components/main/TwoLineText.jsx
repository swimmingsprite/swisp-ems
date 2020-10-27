import React from 'react';
import PublishTime from "../main/PublishTime"


export default function TwoLineText(props) {

    return (
        <div className="two-line-text">
            <h3 className="two-line-text-header">{props.header}</h3>
            <PublishTime text="22.08. 16:58" />
            <p className="two-line-text-text">{props.text}</p>
        </div>
    );
}