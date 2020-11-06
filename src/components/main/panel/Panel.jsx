import React from 'react';
import {Avatar} from "@material-ui/core";
import PublishTime from "../status/PublishTime";
import {timestampToShortDateTime} from "../TextLines";

function mapValuesToPanel(value) {
    console.log("values in map: "+value)

    return <li style={{display: "block",
        marginBottom: "5px"
    }}>
        <Avatar className="post-avatar" style={
            {
                height: "20px",
                width: "20px",
                backgroundColor: "red",
                margin: "0 5px",
                transform: "none",
                /*float: "none",
                display: "inline-block"*/
            }}>
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
    console.log("header props: "+props.first.header)
    console.log("TWOSIDE props VALUES: "+props.first.values[0])


    return (
        <div className="post-status-bar" >
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

    console.log("props VALUES: "+props.values)

    return (
        <div className="panel" style={props.style} >
            <h1 className={"panel-header"}>{props.header}</h1>
            <ul className="panel-content" id="style-1">
                {props.values.map(mapValuesToPanel)}
            </ul>


        </div>
    );
}

export {TwoSidePanel};