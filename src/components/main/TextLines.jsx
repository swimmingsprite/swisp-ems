import React from 'react';
import PublishTime from "./status/PublishTime"
import {timestampToShortDateTime} from "../../logic/time/timeUtils";


function OneLineTextTime(props) {
    var dateTimeString = new Date(props.time).toLocaleDateString()
        + " "
        + new Date(props.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    console.log("************************DATE: "+dateTimeString);

    return (
        <div className="two-line-text">
            <h3 className="two-line-text-header">{props.header}</h3>
            <PublishTime text={props.time && dateTimeString} />
        </div>
    );
}



export default function TwoLineTextTime(props) {
    var dateTimeString = timestampToShortDateTime(props.time)
    return (
        <div className="two-line-text">
            <h3 className="two-line-text-header">{props.header}</h3>
            <PublishTime text={props.time && dateTimeString} />
            <p className="two-line-text-text">{props.text}</p>
        </div>
    );
}

export {OneLineTextTime, timestampToShortDateTime};