import React from "react";

export function Notification(props) {
    return <div className="notification" style={props.style}>
        {/*<div style={{width: "calc(100% - 30px)", display: "block", margin: "0 auto", overflow: "hidden"}}>*/}
            <p className="notification-text">{props.text}</p>
        {/*</div>*/}
    </div>
}