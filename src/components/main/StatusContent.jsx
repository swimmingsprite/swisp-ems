import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TwoLineText from "../main/TwoLineText"

export default function Status(props) {

    return (
        <div className="status-content">
            {props.text}
            {/* <p className="status-content">{props.text}</p> */}
        </div>
    );
}