import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

var intervalId = null;

function startSlide(props) {
    props.onClick();
    intervalId = setInterval(() => {
        props.onClick();
    }, 200);
}

function endSlide() {
    clearInterval(intervalId);
    intervalId = null;
}

export function NextArrow(props) {
    return <div className="arrow next-arrow"
                onMouseDown={() => {
                    startSlide(props)
                }}
                onMouseUp={() => {
                    endSlide()
                }}
                onTouchStart={() => {
                    startSlide(props)
                }
                }
                onTouchEnd={() => {
                    endSlide()
                }}>

        <NavigateNextIcon className="arrow-icon"
                          style={{fontSize: "5rem", position: "relative", top: "calc(50% - 42px)", ...props.style}}/>
    </div>
}

export function BackArrow(props) {

    return <div className="arrow back-arrow"
                onMouseDown={() => {
                    startSlide(props)
                }}
                onMouseUp={() => {
                    endSlide()
                }}
                onTouchStart={() => {
                    startSlide(props)
                }
                }
                onTouchEnd={() => {
                    endSlide()
                }}>
        <NavigateBeforeIcon className="arrow-icon"
                            style={{fontSize: "5rem", position: "relative", top: "calc(50% - 42px)", ...props.style}}/>
    </div>
}