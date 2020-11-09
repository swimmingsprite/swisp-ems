import React from 'react';
import Shifts from "./main/sections/Shifts";

export default function Content(props) {

    /*return only one component based on props */

    return (
        <div className="main-content">
            <div className="content">
                {/*<Home/>*/}
                {/*<Employees />*/}
                <Shifts />
            </div>
        </div>

    );
}