import React from 'react';
import {Avatar} from "@material-ui/core";
import {AvatarGroup} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';
import createStyles from "@material-ui/styles/createStyles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import {useDispatch, useSelector, useStore} from "react-redux";
import {
    currentViewCurrentTimestampLocation,
    currentViewFilter, getCurrentTimestamp,
    getElementLeft,
    getElementWidth,
    getEmployeesShiftNames, getInitCurrentView
} from "../../../logic/shifts/currentView";

function NextArrow(props) {
    return <div className="arrow next-arrow" onClick={props.onClick}>
        <NavigateNextIcon className="arrow-icon" style={{fontSize: "5rem", position: "relative", top: "calc(50% - 42px)"}}/>
    </div>
}

function BackArrow(props) {
    return <div className="arrow back-arrow" onClick={props.onClick}>
        <NavigateBeforeIcon className="arrow-icon" style={{fontSize: "5rem", position: "relative", top: "calc(50% - 42px)"}}/>
    </div>
}

function SlideNext(props) {
    return <div className="slide next-slide" onClick={props.onClick}>
        <RotateRightIcon style={{fontSize: "1.5rem", position: "relative"}}/>
    </div>
}

function SlideBack(props) {
    return <div className="slide back-slide" onClick={props.onClick}>
        <RotateLeftIcon style={{fontSize: "1.5rem", position: "relative"}}/>
    </div>
}

function TimePointer(props) {
    var currentView = useSelector((state) => {
        return state.shiftReducer.currentView
    });

    return <div>
        <div className={"time-pointer"}
             style={{left: getElementLeft(currentView.currentTimestamp, currentView) + "%"}}
        ></div>
    </div>
}


function ShiftElement(props) {
    var shift = props.value;

    var currentView = useSelector((state) => {
        return state.shiftReducer.currentView
    });

    const styles = makeStyles((theme) => createStyles({
        avatar: {
            width: "25px",
            height: "25px",
            fontSize: "0.8rem"
        }
    }))

    const classes = styles();


    const avStyles = makeStyles((theme) => createStyles({
        orange: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: "red",
            backgroundSize: "cover",
            backgroundPosition: "top center"

        },
        purple: {
            color: theme.palette.getContrastText(deepPurple[500]),
            backgroundColor: deepPurple[500],
        }
    }))

    var avClasses = avStyles();

    var left = getElementLeft(shift.start, currentView)
    var width = getElementWidth(shift, currentView)

    var zeroLeftRadius = {};
    if (shift.start < props.currentView.startTimestamp) {
        left = 0;
        width = getElementWidth({end: shift.end, start: currentView.startTimestamp}, currentView)
        zeroLeftRadius = {
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0
        }
    }


    return <div className="shift-element"
                style={{
                    left: left + "%",
                    width: width + "%",
                    ...zeroLeftRadius
                }}>
        <div style={{
            display: "inline-block"
        }
        }>

            {width > 15 && <AvatarGroup max={3}
                                        classes={{avatar: classes.avatar}}
                                        style={{marginLeft: "5px"}}>

                {/*todo MAP AVATARS FUNCTION*/}

                <Avatar
                    /*src="https://www.fillmurray.com/500/900"*/
                    className={avClasses.orange}
                />
                <Avatar
                    /*src="https://www.fillmurray.com/500/900"*/
                    className={avClasses.orange}
                />
                <Avatar
                    /*src="https://www.fillmurray.com/500/900"*/
                    className={avClasses.orange}
                />
                <Avatar
                    /*src="https://www.fillmurray.com/500/900"*/
                    className={avClasses.orange}
                />

            </AvatarGroup>}

        </div>


        {width > 15 && <h1 className={"shift-element-header"}>{getEmployeesShiftNames(shift.employees)}</h1>}
        {width > 5 && <div className="shift-element-end-tile"></div>}
    </div>
}


export default function ShiftPanel(props) {

    var store = useStore();

    var currentView = useSelector((state) => {
        return state.shiftReducer.currentView
    });
    var shifts = useSelector((state) => {
        return state.shiftReducer.shifts
    });

    function mapHoursToDivs() {
        var hours = [];
        for (var x = currentView.startTimestamp; x < currentView.endTimestamp;) {
            hours.push(new Date(x).getHours());
            x += 3600000;
        }

        var divs = [];
        hours.forEach(value => {
            divs.push(
                <div className="shift-content-div">{value}:00</div>
            );
        })

        return divs;
    }


    return <div className="post-status-bar"
                style={{width: "100%", minWidth: "440px", position: "relative"}}>

        {/*ARROWS and SLIDERS*/}
        {currentViewCurrentTimestampLocation(currentView) === "before" &&
        <SlideNext onClick={() => {
            store.dispatch({type: "CURRENT_VIEW_CHANGE", currentView: getInitCurrentView()})
        }}/>}

        <NextArrow onClick={() => {
            store.dispatch({type: "CURRENT_VIEW_ARROW_NEXT_CLICK"})
        }}/>


        {/*MAIN CONTENT */}
        <div className="shift-content">
            <div className="shift-content-table">

                <div>
                    {mapHoursToDivs()}
                </div>

                {/*TIME POINTER*/}
                {currentViewFilter({start: getCurrentTimestamp()}, currentView) && <TimePointer/>}

                {/*FILTERED SHIFT ELEMENTS*/}
                {shifts
                    .filter(shift => {
                        return currentViewFilter(shift,
                            currentView,
                            store.getState().shiftReducer.selectedPlaceId,
                            store.getState().shiftReducer.currentShiftSubHeaderDepartmentId
                        );
                    })
                    .map(shift => {
                        return <ShiftElement value={shift} currentView={currentView}/>
                    })}
            </div>
        </div>


        {/*ARROWS and SLIDERS*/}
        <BackArrow onClick={() => {
            store.dispatch({type: "CURRENT_VIEW_ARROW_BACK_CLICK"})
        }}/>

        {currentViewCurrentTimestampLocation(currentView) === "after" &&
        <SlideBack onClick={() => {
            store.dispatch({type: "CURRENT_VIEW_CHANGE", currentView: getInitCurrentView()})
        }}/>}
    </div>
}