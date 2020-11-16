import React from 'react';
import {Avatar} from "@material-ui/core";
import {AvatarGroup} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';
import createStyles from "@material-ui/styles/createStyles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {useDispatch, useSelector, useStore} from "react-redux";
import {
    currentViewFilter,
    getElementLeft,
    getElementWidth,
    getEmployeesShiftNames
} from "../../../logic/shifts/currentView";

function NextArrow(props) {
    return <div className="arrow next-arrow" onClick={props.onClick}>
        <NavigateNextIcon style={{fontSize: "5rem", position: "relative",top: "calc(50% - 42px)"}}/>
    </div>
}

function BackArrow(props) {
    return <div className="arrow back-arrow" onClick={props.onClick}>
        <NavigateBeforeIcon style={{fontSize: "5rem", position: "relative",top: "calc(50% - 42px)"}}/>
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
    /*do propsu cely objekt jednej smeny*/
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

    /*todo MAP AVATARS FUNCTION*/

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

            <AvatarGroup max={3}
                         classes={{avatar: classes.avatar}}
                         style={{marginLeft: "5px"}}>

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

            </AvatarGroup>

        </div>


        <h1 className={"shift-element-header"}>{getEmployeesShiftNames(shift.employees)}</h1>
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


    return <div className="post-status-bar shift-panel"
                style={{width: "100%", minWidth: "440px", position: "relative"}}>
        <NextArrow onClick={() => {store.dispatch({type: "CURRENT_VIEW_ARROW_NEXT_CLICK"})}}/>
        <div className="shift-content">
            <div className="shift-content-table">

                <div>
                    {mapHoursToDivs()}
                </div>

                {currentViewFilter({start: new Date().getTime()},
                    currentView) && <TimePointer/>}

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

        <BackArrow onClick={() => {store.dispatch({type: "CURRENT_VIEW_ARROW_BACK_CLICK"})}} />

    </div>
    // </div>
}