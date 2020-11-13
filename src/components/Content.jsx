import React, {useState} from 'react';
import Shifts from "./main/sections/Shifts";
import {useSelector, useStore} from "react-redux";
import Home from "./main/sections/Home";
import Employees from "./main/sections/Employees";
import ShiftPanel from "./main/panel/ShiftPanel";

export default function Content(props) {

    /*return only one component based on props */
    var currentSection = useSelector((state) => state.rootReducer.currentSection);

    function getCurrentSection() {
        console.log("CURRENT SECTION JE: "+currentSection);
        if (currentSection === "Home") return <Home/>;
        if (currentSection === "Employees") return <Employees />;
        if (currentSection === "Shifts") return <Shifts />;

    }

    return (
        // <div className="main-content"></div>
        <div className="main-content">
            <div className="content">
                {getCurrentSection()}
            </div>
        </div>

    );
}