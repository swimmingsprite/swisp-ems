import React from 'react';
import {Avatar} from "@material-ui/core";
import {AvatarGroup} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';
import createStyles from "@material-ui/styles/createStyles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";


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
    var aColor = "red";

    console.log("acolor: " + aColor)

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

    return <div className="shift-element">
        <div style={{display: "inline-block"}}>

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
    var shifts = [
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
    ]

    function mapHoursToDivs(cView) {
        var hours = [];
        for (var x = cView.startTimestamp; x < cView.endTimestamp; ) {
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

    var time = new Date().setHours(new Date().getHours(),0,0,0);
    var startTimestamp = new Date(time).getTime()-18000000

    var time2 = new Date().setHours(new Date().getHours(),0,0,0);
    var endTimestamp = new Date(time).getTime()+18000000-1

    var test = new Date(startTimestamp).toLocaleTimeString();
    var test2 = new Date(endTimestamp).toLocaleTimeString();
    console.log("TEST: "+test);
    console.log("TEST 2: "+test2);

    var [currentView, setCurrentView] = React.useState({
        startHour: new Date().getHours() - 5,
        endHour: new Date().getHours() + 4,
        currentTimestamp: new Date().getTime(),
        startTimestamp: startTimestamp,
        endTimestamp: endTimestamp,
    })

    console.log("start: "+currentView.start+" " +
        "end: "+currentView.end+" " +
        "current: "+currentView.current+
        "start timestamp:" +currentView.startTimestamp);


    return <div className="post-status-bar"
                style={{width: "100%", minWidth: "440px"}}>
        <div className="shift-content">
            <div className="shift-content-table">
                <div>
                    {mapHoursToDivs(currentView)}
                </div>

                {/*MAP SHIFTS TO SHIFT ELEMENTS*/}

                {shifts
                    .filter(value => {
                        if (value.start >= currentView.startTimestamp && value.start < currentView.endTimestamp) return true;
                        if (value.end >= currentView.startTimestamp && value.end < currentView.endTimestamp) return true;
                        if (value.start < currentView.startTimestamp && value.end > currentView.endTimestamp) return true;
                        return false;
                    })
                    .map(value => {
                    return <ShiftElement value={value}/>
                })}



            </div>
        </div>


    </div>
}