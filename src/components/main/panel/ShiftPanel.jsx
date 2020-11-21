import React from 'react';
import {Avatar} from "@material-ui/core";
import {AvatarGroup} from '@material-ui/lab';
import {useSelector, useStore} from "react-redux";
import {
    currentViewCurrentTimestampLocation,
    currentViewFilter,
    getCurrentTimestamp,
    getElementLeft,
    getElementWidth,
    getEmployeesShiftNames,
    getInitCurrentView
} from "../../../logic/shifts/currentView";
import isBase64 from "is-base64";
import {BackArrow, NextArrow} from "../arrows and sliders/Arrows";
import {SlideBack, SlideNext} from "../arrows and sliders/Sliders";

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

    function mapAvatars(employee) {
        let avatarStyle = employee.avatarImg && isBase64(employee.avatarImg, {allowMime: true})
            ? {backgroundImage: employee.avatarImg} : {backgroundColor: employee.avatarColor};

        return <Avatar style={
            {
                height: "25px",
                width: "25px",
                backgroundColor: avatarStyle.backgroundColor,
                fontSize: "0.80rem",
                fontWeight: "600",
                backgroundPosition: "top center"
            }}
                src={avatarStyle.backgroundImage}>
            {employee.name.charAt(0)}
        </Avatar>
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
                                        classes={{avatar: {height: "25px",
                                                width: "25px",}}}
                                        style={{marginLeft: "5px"}}
            >

                {shift.employees.map(mapAvatars)}

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