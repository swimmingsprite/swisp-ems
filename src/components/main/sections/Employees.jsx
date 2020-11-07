import React from 'react';
import Title, {SubTitle} from "../Title";
import {TwoSidePanel} from "../panel/Panel";


export default function Employees(props) {

    var arrivals = [
        {time: new Date().getTime(), name: "John Vasilijevovič" + Math.floor(Math.random() * 999)},
        {time: new Date().getTime(), name: "Alexandra Myšiakovovová" + Math.floor(Math.random() * 999)},
        {time: new Date().getTime(), name: "John Bar" + Math.floor(Math.random() * 999)},
        {time: new Date().getTime(), name: "John Bar" + Math.floor(Math.random() * 999)},
        {time: new Date().getTime(), name: "John Bar" + Math.floor(Math.random() * 999)},
        {time: new Date().getTime(), name: "John Bar" + Math.floor(Math.random() * 999)},
        {time: new Date().getTime(), name: "John Bar" + Math.floor(Math.random() * 999)},
        {time: new Date().getTime(), name: "John Bar" + Math.floor(Math.random() * 999)},
        {time: new Date().getTime(), name: "John Bar" + Math.floor(Math.random() * 999)},
        {time: new Date().getTime(), name: "John Bar" + Math.floor(Math.random() * 999)}
    ]
    var exits = [
        {time: new Date().getTime(), name: "John Bar" + Math.floor(Math.random() * 999)},
        {time: new Date().getTime(), name: "John Bar" + Math.floor(Math.random() * 999)},
        {time: new Date().getTime(), name: "John Bar" + Math.floor(Math.random() * 999)}
    ]

    var lates = [
        {startTime: new Date().getTime()-240000, name: "John Bar" + Math.floor(Math.random() * 999)},
        {startTime: new Date().getTime()-840000, name: "John Bar" + Math.floor(Math.random() * 999)},
        {startTime: new Date().getTime()-700000, name: "John Bar" + Math.floor(Math.random() * 999)}
    ]



    /*todo filter active modules*/

    return <div>
        <Title text="Zamestnanci"/>
        <SubTitle text="Príchody a odchody"/>
        <TwoSidePanel
            first={{
                header: "Príchody",
                values: [...arrivals]
            }}

            second={{
                header: "Odchody",
                values: [...exits]
            }}
        />

        <SubTitle text="Meškania a absencie"/>
        <TwoSidePanel
            first={{
                header: "Meškania",
                values: [...arrivals]
            }}

            second={{
                header: "Absencie",
                values: [...exits]
            }}
        />

        <SubTitle text="Aktuálny stav"/>
        <TwoSidePanel
            first={{
                header: "Prítomní",
                values: [...arrivals]
            }}

            second={{
                header: "Meškajúci",
                values: [...exits]
            }}
        />

    </div>
}