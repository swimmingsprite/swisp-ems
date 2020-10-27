import React from 'react';
import PublishTime from "./status/PublishTime"


export function OneLineTextTime(props) {
    return (
        <div className="two-line-text">
            <h3 className="two-line-text-header">{props.header}</h3>
            <PublishTime text="22.08. 16:58" />
        </div>
    );
}

export default function TwoLineTextTime(props) {

    return (
        <div className="two-line-text">
            <h3 className="two-line-text-header">{props.header}</h3>
            <PublishTime text="22.08. 16:58" />
            <p className="two-line-text-text">{props.text}</p>
        </div>
    );
}