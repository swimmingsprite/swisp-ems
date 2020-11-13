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

function NextArrow(props) {
    var dispatch = useDispatch();

    function dispatchClick() {
        dispatch({ type: 'ARROW_NEXT_CLICK', text: "Clicked back !" })
    }

    return <div className="arrow next-arrow" onClick={dispatchClick}>
        <NavigateNextIcon style={{fontSize: "5rem"}} />
    </div>
}

function BackArrow(props) {
    var dispatch = useDispatch();

    function dispatchClick() {
        dispatch({ type: 'ARROW_BACK_CLICK', text: "Clicked back !" })
    }

    return <div className="arrow back-arrow" onClick={dispatchClick}>
        <NavigateBeforeIcon style={{fontSize: "5rem"}}  />
    </div>
}

function TimePointer(props) {
    return <div>
        <div className={"time-pointer"}>

        </div>
    </div>
}


/* var shifts = [
        {
            id: "6562656",
            start: new Date().getTime() - (60000 * 20),
            end: new Date().getTime() + (60000 * 30),
            employees: [
                {name: "Jožo Baranek", id: 1885959, avatar: "image base64 <--"},
                {name: "Majko Zguruna", id: 1885958, avatar: "image base64 <--"},
                {name: "Harry Potter", id: 1885955, avatar: "image base64 <--"}
            ]
        },
    ]*/

function ShiftElement(props) {
    /*do propsu cely objekt jednej smeny*/
    var shift = props.value;


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

    var length = (props.currentView.endTimestamp - props.currentView.startTimestamp);
    var onePercent = length / 100;
    var left = (shift.start - props.currentView.startTimestamp) / onePercent;

    //   [-----*----------*--------------]  end - start = dlzka, dlzka / 100 = 1% dlzka,
    // shift-start - start = dlzka / 1% dlzka vysledok + "%"



    var width = (shift.end - shift.start) / onePercent;
    var zeroLeftRadius = {};
    if (shift.start < props.currentView.startTimestamp) {
        left = 0;
        width = (shift.end - props.currentView.startTimestamp) / onePercent;
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
                }
                }>
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


        <h1 className={"shift-element-header"}>John Barney, Silvia Cloak, Amanda Header</h1>
    </div>
}


export default function ShiftPanel(props) {

    var store = useStore();

    var shifts = [
        {
            id: "6562656",
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 240),
            employees: [
                {name: "Jožo Baranek", id: 1885959, avatar: "image base64 <--"},
                {name: "Majko Zguruna", id: 1885958, avatar: "image base64 <--"},
                {name: "Harry Potter", id: 1885955, avatar: "image base64 <--"}
            ]
        },

    ]

    console.log("SHIFT START TIME:" + new Date(shifts[0].start).toLocaleTimeString());
    console.log("SHIFT END TIME:" + new Date(shifts[0].end).toLocaleTimeString());

    function mapHoursToDivs(cView) {
        var hours = [];
        for (var x = cView.startTimestamp; x < cView.endTimestamp;) {
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

    var time = new Date().setHours(new Date().getHours(), 0, 0, 0);


    var [currentView, setCurrentView] = React.useState({
        currentTimestamp: new Date().getTime(),
        startTimestamp: new Date(time).getTime() - 18000000,
        endTimestamp: new Date(time).getTime() + 18000000 - 1,
    })

    var handleArrowClick = (type) => {
        setCurrentView(prevState => {
            if (type === "ARROW_NEXT_CLICK") return {
                currentTimestamp: new Date().getTime(),
                startTimestamp: currentView.startTimestamp+3600000,
                endTimestamp: currentView.endTimestamp+3600000
            }
            else if (type === "ARROW_BACK_CLICK") return {
                currentTimestamp: new Date().getTime(),
                startTimestamp: currentView.startTimestamp-3600000,
                endTimestamp: currentView.endTimestamp-3600000
            }
            return prevState;
        });
        /*store.dispatch({
            type: "CURRENT_VIEW_CHANGE",
            value: {
                startTimestamp: currentView.startTimestamp,
                endTimestamp: currentView.endTimestamp
            }
        })*/
    }

    store.subscribe(() => {
        var state = store.getState();
        console.log("state je: "+state.arrowClickReducer.lastAction);
        if (state.arrowClickReducer.lastAction === "ARROW_NEXT_CLICK") handleArrowClick("NEXT_CLICK")
        else if (state.arrowClickReducer.lastAction === "ARROW_BACK_CLICK") handleArrowClick("BACK_CLICK")
    });




    return <div className="post-status-bar shift-panel"
                style={{width: "100%", minWidth: "440px"}}>
        <div className="shift-content">
            <NextArrow />
            <BackArrow />
            <div className="shift-content-table">

                <div>
                    {mapHoursToDivs(currentView)}
                </div>

                <TimePointer />
                {/*MAP SHIFTS TO SHIFT ELEMENTS*/}

                {shifts
                    .filter(shift => {
                        if (shift.start >= currentView.startTimestamp && shift.start < currentView.endTimestamp) return true;
                        if (shift.end >= currentView.startTimestamp && shift.end < currentView.endTimestamp) return true;
                        if (shift.start < currentView.startTimestamp && shift.end > currentView.endTimestamp) return true;
                        return false;
                    })
                    .map(shift => {
                        return <ShiftElement value={shift} currentView={currentView}/>
                    })}


            </div>
        </div>


    </div>
}