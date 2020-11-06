import React from 'react';
import PublishTime from "./status/PublishTime"


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

function timestampToShortDateTime(time) {
    return new Date(time).toLocaleDateString([], {day: '2-digit', month:'2-digit'})
        + '\u00A0\u00A0\u00A0'
        + new Date(time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

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