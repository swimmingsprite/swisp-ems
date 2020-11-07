import React from 'react';
import {Avatar} from "@material-ui/core";
import {AvatarGroup} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import createStyles from "@material-ui/styles/createStyles";



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

    const styles = makeStyles((theme) => createStyles({
        avatar: {
            width: "25px",
            height: "25px",
            fontSize: "0.8rem"
        }
    }))

    const classes = styles();


    return <div className="shift-element">

        <AvatarGroup max={3}
                     classes={{avatar: classes.avatar}}

        >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>

        </AvatarGroup>
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
                style={{width: "100%"}}>
        <div className="shift-content">
            <table className="shift-content-table">
                <tr>
                    <td className="shift-content-td">8:00</td>
                    <td className="shift-content-td">9:00</td>
                    <td className="shift-content-td">10:00</td>
                    <td className="shift-content-td">11:00</td>
                    <td className="shift-content-td">12:00</td>
                    <td className="shift-content-td">13:00</td>
                    <td className="shift-content-td">14:00</td>
                    <td className="shift-content-td">15:00</td>
                    <td className="shift-content-td">16:00</td>
                    <td className="shift-content-td">17:00</td>
                </tr>
                <tr>
                <ShiftElement value={shifts[0]}/>
                </tr>
            </table>
        </div>


    </div>
}