import {useSelector, useStore} from "react-redux";

import React from "react";
import {BackArrow, NextArrow} from "../arrows and sliders/Arrows";
import InputBar from "../input/InputBar";
import {textEmojisToUnicode} from "../../../logic/emojis/emojis";
import TextareaAutosize from "react-autosize-textarea";
import Title, {SubTitle} from "../title/Title";

export default function ShiftSchedulerPanel(props) {

    var store = useStore();


    return <div className="post-status-bar"
                style={{width: "100%", minWidth: "440px", position: "relative"}}>

        {/*ARROW */}


        <NextArrow onClick={() => {
            store.dispatch({type: "SHIFT_SCHEDULER_ARROW_NEXT_CLICK"})
        }}/>


        {/*SEARCH BAR*/}
        <div>
            <TextareaAutosize
                // onChange={(event) => {}}
                // onKeyDown={}
                className={"shift-scheduler-textarea"}

                placeholder="Hľadať zamestnanca..."
                // value=""
            ></TextareaAutosize>



        </div>

        <ul className="shift-scheduler-input-ul">
            <li className="shift-scheduler-input-li">Ahahahahah</li>
            <li className="shift-scheduler-input-li">Ahahahahah</li>
            <li className="shift-scheduler-input-li">Ahahahahah</li>
            <li className="shift-scheduler-input-li">Ahahahahah</li>

        </ul>

        {/*MAIN CONTENT */}


        <div className="scheduler-content" style={{minHeight: 0}}>

                <SubTitle text="Kaufland Stredočeská" />
                <h8>oddelenie záhrad: </h8>
                <h2 className="scheduler-date">28.12.2020, Utorok</h2>
                <ul>
                    <li className="selected-item">
                        <div className="shift-element">
                            <p>John Barney</p>
                        </div>
                    </li>

                </ul>

        </div>

        <div className="shift-scheduler-calendar">
            <div className="shift-scheduler-calendar-header"><h2>August</h2></div>
            <ul className="shift-scheduler-calendar-ul">
                <li className="shift-scheduler-calendar-li">
                    <h2 style={{
                        textAlign: "center",
                        fontSize: "2rem"
                    }}>2.</h2>
                    <p style={{
                        textAlign: "center",
                        fontSize: "0.8rem"
                    }}>Streda</p>

                </li>

                <li className="shift-scheduler-calendar-li">
                    <h2 style={{
                        textAlign: "center",
                        fontSize: "2rem"
                    }}>2.</h2>
                    <p style={{
                        textAlign: "center",
                        fontSize: "0.8rem"
                    }}>Streda</p>

                </li>
                {/*todo bude zoznam zamestnancov z daneho miesta a z neho sa iba bude filtrovať*/}
                {/* <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>*/}
            </ul>
        </div>


        {/*ARROW */}
        <BackArrow onClick={() => {
            store.dispatch({type: "SHIFT_SCHEDULER_ARROW_BACK_CLICK"})
        }}/>

    </div>
}