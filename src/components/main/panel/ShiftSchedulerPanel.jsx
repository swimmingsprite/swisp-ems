import {useSelector, useStore} from "react-redux";

import React from "react";

export default function ShiftSchedulerPanel(props) {

    var store = useStore();

    var currentView = useSelector((state) => {
        return state.shiftReducer.currentView
    });
    var shifts = useSelector((state) => {
        return state.shiftReducer.shifts
    });


    return <div className="post-status-bar"
                style={{width: "100%", minWidth: "440px", position: "relative"}}>

        {/*ARROW */}


        <NextArrow onClick={() => {
            store.dispatch({type: "CURRENT_VIEW_ARROW_NEXT_CLICK"})
        }}/>


        {/*MAIN CONTENT */}
        <div className="shift-content">
            <div className="shift-content-table">

                <div>
                    {/*{mapHoursToDivs()}*/}
                </div>


            </div>
        </div>


        {/*ARROW */}
        <BackArrow onClick={() => {
            store.dispatch({type: "CURRENT_VIEW_ARROW_BACK_CLICK"})
        }}/>

    </div>
}