import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import React from "react";
import RotateRightIcon from "@material-ui/icons/RotateRight";

export function SlideNext(props) {
    return <div className="slide next-slide" onClick={props.onClick}>
        <RotateRightIcon style={{fontSize: "1.5rem", position: "relative"}}/>
    </div>
}

export function SlideBack(props) {
    return <div className="slide back-slide" onClick={props.onClick}>
        <RotateLeftIcon style={{fontSize: "1.5rem", position: "relative"}}/>
    </div>
}