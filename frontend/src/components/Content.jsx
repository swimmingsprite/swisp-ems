import React from 'react';
import Shifts from "./main/sections/Shifts";
import {useSelector} from "react-redux";
import Home from "./main/sections/Home";
import Employees from "./main/sections/Employees";
import {Notification} from "./main/notification/Notification";

export default function Content(props) {

    /*return only one component based on props */
    var currentSection = useSelector((state) => state.rootReducer.currentSection);
    var notification = useSelector((state) => state.rootReducer.notification);

    function getCurrentSection() {
        console.log("CURRENT SECTION JE: "+currentSection);
        if (currentSection === "Home") return <Home/>;
        if (currentSection === "Employees") return <Employees />;
        if (currentSection === "Shifts") return <Shifts />;
    }



    return (
        // <div className="main-content"></div>
        <div className="main-content">
            {notification && <Notification text={notification.text} />}
            <div className="content">
                {getCurrentSection()}
            </div>
        </div>

    );
}