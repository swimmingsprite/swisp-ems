import React from 'react';
import Home from "./main/sections/Home"
import Employees from "./main/sections/Employees";

export default function Content(props) {

    /*return only one component based on props */

    return (
        <div className="main-content">
            <div className="content">
                {/*<Home/>*/}
                <Employees />
            </div>
        </div>

    );
}