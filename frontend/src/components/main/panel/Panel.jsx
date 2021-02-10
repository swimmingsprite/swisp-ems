import React from 'react';
import {Avatar} from "@material-ui/core";
import PublishTime from "../status/PublishTime";
import {timestampToShortDateTime} from "../TextLines";
import isBase64 from "is-base64";

function mapValuesToPanel(value) {
    let avatarStyle = value.avatarImg && isBase64(value.avatarImg, {allowMime: true})
        ? {backgroundImage: value.avatarImg} : {backgroundColor: value.avatarColor};

    return <li className={"panel-content-li"}>
        <Avatar className="post-avatar" style={
            {
                height: "20px",
                width: "20px",
                backgroundColor: avatarStyle.backgroundColor,
                fontSize: "0.85rem",
                margin: "0 5px",
                transform: "none",
            }}
                src={avatarStyle.backgroundImage}>
            {value.name.charAt(0)}
        </Avatar>


        <h2 className={"panel-content-name"}
            style={{display: "inline-block"}}
        >{value.name}
        </h2>

        <PublishTime text={timestampToShortDateTime(value.time)}
                     style={{
                         marginRight: "5px",
                         marginTop: "2px"
                     }}
        />
        <div style={{clear: "both"}}></div>
    </li>
}

function TwoSidePanel(props) {


    return (
        <div className="post-status-bar">
            <Panel header={props.first.header}
                   values={props.first.values}
            />

            <Panel header={props.second.header}
                   values={props.second.values}
            />
        </div>
    );
}

export default function Panel(props) {

    console.log("props VALUES: " + props.values)

    return (
        <div className="panel" style={props.style}>
            <h1 className={"panel-header"}>{props.header}</h1>
            <ul className="panel-content" id="style-1">
                {props.values.map(
                    mapValuesToPanel
                )}
            </ul>


        </div>
    );
}

export {TwoSidePanel};