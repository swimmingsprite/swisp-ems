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
                         style={{marginLeft: "5px", display: "flex"}}>
                {/*<Avatar alt="Remy Sharp"
                    className={avClasses.orange}
                    style={{backgroundImage: "url(https://i.insider.com/5484d9d1eab8ea3017b17e29?width=800&format=jpeg&auto=webp)"}}
            />
            <Avatar alt="Vemy Sharp" src="/static/images/avatar/1.jpg" style={{backgroundColor: "blue"}}/>
            <Avatar alt="Gemy Sharp" src="/static/images/avatar/1.jpg" style={{backgroundColor: "green"}}/>
            <Avatar alt="Aemy Sharp" src="/static/images/avatar/1.jpg" style={{backgroundColor: "purple"}}/>
            <Avatar alt="Hemy Sharp" src="/static/images/avatar/1.jpg"/>*/}
                {/*<Avatar src='htctps://www.fillmurray.com/500/900' size={100} backgroundColor='rgba(199,99,128,0.8)' />*/}
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


    return <div className="post-status-bar"
                style={{width: "100%", minWidth: "440px"}}>
        <div className="shift-content">
            <div className="shift-content-table">
                <div>
                    <div className="shift-content-div">8:00</div>
                    <div className="shift-content-div">9:00</div>
                    <div className="shift-content-div">10:00</div>
                    <div className="shift-content-div">11:00</div>
                    <div className="shift-content-div">12:00</div>
                    <div className="shift-content-div">13:00</div>
                    <div className="shift-content-div">14:00</div>
                    <div className="shift-content-div">15:00</div>
                    <div className="shift-content-div">16:00</div>
                    <div className="shift-content-div">17:00</div>
                </div>

                <ShiftElement value={shifts[0]}/>

            </div>
        </div>


    </div>
}