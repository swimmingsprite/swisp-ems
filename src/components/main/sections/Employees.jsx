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

    </div>
}