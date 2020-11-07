import React from 'react';
import Title, {SubTitle} from "../Title";
import ShiftPanel from "../panel/ShiftPanel";


export default function Shifts(props) {

    /*shifts state*/

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


    return <div>
        <Title text="Smeny"/>
        <SubTitle text="Prebiehajúce"/>
        <ShiftPanel values={shifts}/>


    </div>
}