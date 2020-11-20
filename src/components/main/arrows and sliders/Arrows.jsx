import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export function NextArrow(props) {
    return <div className="arrow next-arrow" onClick={props.onClick}>
        <NavigateNextIcon className="arrow-icon"
                          style={{fontSize: "5rem", position: "relative", top: "calc(50% - 42px)"}}/>
    </div>
}

export function BackArrow(props) {
    return <div className="arrow back-arrow" onClick={props.onClick}>
        <NavigateBeforeIcon className="arrow-icon"
                            style={{fontSize: "5rem", position: "relative", top: "calc(50% - 42px)"}}/>
    </div>
}